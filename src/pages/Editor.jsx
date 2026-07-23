import { useQuillEditor } from "../utils/useQuillEditor.js";
import useNSFW from "../hooks/useNSFW.js"

export const Editor = ({ onChange, documentId }) => {
  const { model, loading } = useNSFW();
  const { containerRef, status } = useQuillEditor({ onChange, model, documentId });

  return (
    <>
      <div className="editor">
        {status !== "idle" && (
          <div className="editor-status">
            {status === "saving" && "Saving…"}
            {status === "saved" && "Saved ✓"}
            {status === "error" && "Failed to save"}
          </div>
        )}
        <div ref={containerRef} className="editor-card" />
      </div>
    </>
  );
}