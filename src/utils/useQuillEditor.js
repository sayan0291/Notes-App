import { useRef,useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { createImageUrl } from "../Database/Supabase-client.js";

const toolbarOptions = [
  ["undo", "redo"],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'formula'],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],
];

const tooltipMapping = [
  { selector: '.ql-undo', title: 'Undo' },
  { selector: '.ql-redo', title: 'Redo' },
  { selector: '.ql-bold', title: 'Bold' },
  { selector: '.ql-italic', title: 'Italic' },
  { selector: '.ql-underline', title: 'Underline' },
  { selector: '.ql-strike', title: 'Strikethrough' },
  { selector: '.ql-blockquote', title: 'Blockquote' },
  { selector: '.ql-code-block', title: 'Code Block' },
  { selector: '.ql-link', title: 'Insert Link' },
  { selector: '.ql-image', title: 'Insert Image' },
  { selector: '.ql-formula', title: 'Insert Formula' },
  { selector: '.ql-list[value="ordered"]', title: 'Numbered List' },
  { selector: '.ql-list[value="bullet"]', title: 'Bulleted List' },
  { selector: '.ql-list[value="check"]', title: 'Check List' },
  { selector: '.ql-script[value="sub"]', title: 'Subscript' },
  { selector: '.ql-script[value="super"]', title: 'Superscript' },
  { selector: '.ql-indent[value="-1"]', title: 'Decrease Indent' },
  { selector: '.ql-indent[value="+1"]', title: 'Increase Indent' },
  { selector: '.ql-direction[value="rtl"]', title: 'Text Direction (RTL)' },
  { selector: '.ql-header', title: 'Heading Level' },
  { selector: '.ql-color', title: 'Text Color' },
  { selector: '.ql-background', title: 'Background Color' },
  { selector: '.ql-font', title: 'Font Style' },
  { selector: '.ql-align', title: 'Text Alignment' },
  { selector: '.ql-clean', title: 'Clear Formatting' },
];

async function handleImage(model,quillRef) {
    const input = document.createElement("input");

    input.type = "file";

    input.accept = "image/png,image/jpeg";

    input.click();

    input.onchange = async () => {
        const file = input.files[0];
        if(!file) return;

        const allowedTypes = [
            "image/jpeg",
            "image/png"
        ]

        if(!allowedTypes.includes(file.type)) {
            alert("Only JPEG,PNG,JPG Allowed");
            return;
        }

        if(file.size > 5*1024*1024) {
            alert("Max 5MB");
            return;
        }

        if (!model) {
            alert("Image scanner still loading...");
            return;
        }

        const imageURL = URL.createObjectURL(file)

        const img  = new Image();

        img.src = imageURL;

        await img.decode();

        try {
            const predictions = await model.classify(img)
            const range = quillRef.current.getSelection(true);

            const blocked = predictions.some(obj => ["Porn", "Hentai", "Sexy"].includes(obj.className) &&
                                                    obj.probability > 0.30
                                            );

            if (blocked) {
                alert("You are not allowed to upload 18+ images");
                return;
            }

            const publicImageUrl = await createImageUrl(file)
            if (!publicImageUrl) {
                alert("Failed to upload image");
                return;
            }

            quillRef.current.insertEmbed(
                range.index,
                "image",
                publicImageUrl
            );
        } catch (error) {
            console.log(error)
        }
    }
}

export function useQuillEditor({onChange,model}) {
    const containerRef = useRef(null);
    const quillRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        modelRef.current = model;
    }, [model]);

    useEffect(()=>{
        if(!containerRef.current || quillRef.current) return;

        const icons = Quill.import("ui/icons");

        icons.undo = "⮌";

        icons.redo = "⮎";

        icons.clean = "🧹";

        icons.folder = "name";

        quillRef.current = new Quill(containerRef.current,{
            theme: "snow",
            modules: {
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        undo() {
                            quillRef.current.history.undo();
                        },
                        redo() {
                            quillRef.current.history.redo();
                        },
                        image: async () => {
                            await handleImage(modelRef.current,quillRef);
                        }
                    }
                },
                history: {
                    delay: 1000,
                    maxStack: 100,
                    userOnly: true,
                },
            },
        });

        const toolbarElement = containerRef.current.previousSibling;
        if (toolbarElement) {
            tooltipMapping.forEach(({ selector, title }) => {
                const element = toolbarElement.querySelector(selector);
                if (element) {
                    element.setAttribute('title', title);
                }
            });
        }

        quillRef.current.on("text-change",() => {
            onChange?.(quillRef.current.root.innerHTML);
        });

        return () => {
            quillRef.current = null;
        };

    },[onChange])
    return containerRef;
}