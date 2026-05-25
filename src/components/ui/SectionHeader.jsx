import { ArrowDownUp } from "lucide-react"
import Button from "./buttons"

export const SectionHeader = ({title}) => {
    return(
        <>
            <div className="section-header">
                <h2 className="text-md text-tertiary">{title}</h2>
                <Button varient="filterBtn">
                    <ArrowDownUp size={18} strokeWidth={1.5} />
                    <p className="hidden md:block text-md text-tertiary">Date</p>
                </Button>
            </div>
        </>
    )
}