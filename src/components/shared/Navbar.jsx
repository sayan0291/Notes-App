import { TextAlignEnd,NotebookText } from "lucide-react"
import { Icon } from "../ui/Icon"
import Button from "../ui/Buttons.jsx"
import { UseUi } from "../../Context/UiContext"

export const Navbar = () => {

    const { dispatch } = UseUi();

    return(
        <div className="flex-bw-ic p-3 bg-secondary border-b-[0.01em] border-divider">
            <Icon varient="logo">
                <NotebookText  strokeWidth={1.5} size={25} />
                <h1 className="text-white font-sans hidden sm:block">Notes</h1>
            </Icon>
            <Button varient="menuBtn" onClick={() => dispatch({type: 'TOGGLE_MENU'})}>
                <TextAlignEnd strokeWidth={1.5} size={22} />
            </Button>
        </div>
    )
}