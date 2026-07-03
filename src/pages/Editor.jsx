
import { useQuillEditor } from "../utils/useQuillEditor.js";
import useNSFW from "../hooks/useNSFW.js"

export const Editor = ({ onChange }) => {
  const { model,loading } = useNSFW();
  const ref = useQuillEditor({ onChange,model });

    return (
      <>
        <div className="editor">
          <div ref={ref} className="editor-card" />
        </div>
      </>
    );
}