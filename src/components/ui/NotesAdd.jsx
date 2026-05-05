import { FormInput,FormTextArea } from "../../Form/FormUi";
import Button from "./Buttons";
import { useForm } from "react-hook-form";
import { AddNotes,ReadData } from "../../Form/FormHandler";

const NotesAdd = ({setShowSection}) => {

    const {
        register,
        handleSubmit,
        formState: {errors,isSubmitting}
    } = useForm({mode: "onSubmit"});

    const handleDataSubmit = (Notesdata) => {
        AddNotes(Notesdata)
    }

    return(
        <div className="full-card">
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

export default NotesAdd;