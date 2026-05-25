import { FormInput,FormTextArea } from "../Form/FormUi";
import Button from "../components/ui/Buttons.jsx";
import { useForm } from "react-hook-form";
import { AddNotes,ReadData } from "../Form/FormHandler";
import { Bold,Italic,Underline,List,Link2 } from "lucide-react";

export const Editor = ({setShowSection}) => {

    const {
        register,
        handleSubmit,
        formState: {errors,isSubmitting}
    } = useForm({mode: "onSubmit"});

    const handleDataSubmit = (Notesdata) => {
        AddNotes(Notesdata)
    }

    return(
        <div className="editor-card">
            <div className="toolbar">
                <Button varient="toolbarBtn">
                    <Bold size={20} strokeWidth={1.5} />
                </Button>
                <Button varient="toolbarBtn">
                    <Italic size={20} strokeWidth={1.5} />
                </Button>
                <Button varient="toolbarBtn">
                    <Underline size={20} strokeWidth={1.5} />
                </Button>
                <Button varient="toolbarBtn">
                    <List size={20} strokeWidth={1.5} />
                </Button>
                <Button varient="toolbarBtn">
                    <Link2 size={20} strokeWidth={1.5} />
                </Button>
            </div>
            <form className="notesadd" onSubmit={handleSubmit(handleDataSubmit)}>
                <div className="title">
                    <FormInput type="text" placeholder="Title" registerFor="title" validation={register} />
                </div>
                <div className="description">
                    <FormTextArea type="text" placeholder="Description" registerFor="description" validation={register} />
                </div>
                <div className="bg-transparent border-none flex gap-5">
                    <Button varient="addbuttn" type="submit" disabled={isSubmitting}>
                        add
                    </Button>
                    <Button varient="cancelbuttn" onClick={() => setShowSection((prev) => !prev)} >
                        cancel
                    </Button>
                </div>
            </form>
        </div>
    )
}