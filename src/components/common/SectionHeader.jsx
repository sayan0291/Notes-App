import { NavLink } from "react-router-dom"
import { PlusIcon } from "lucide-react"
import Button from "./Button.jsx"

import DropdownMenuRadioGroupDemo from "./DropdownMenu.jsx"

export const SectionHeader = ({sectiontitle}) => {
    return(
        <>
            <div className="section-header">
                <h2 className="text-md text-tertiary uppercase">{sectiontitle}</h2>
                <div className="flex-ic gap-2">
                    <DropdownMenuRadioGroupDemo />
                    <NavLink to='/editor'>
                        <Button variant="outline" size="icon" className="bg-white rounded-3xl" >
                            <PlusIcon />
                        </Button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}