import { ArrowDownUp } from "lucide-react"
import Button from "./buttons"

export const SectionHeader = ({sectiontitle}) => {
    return(
        <>
            <div className="section-header">
                <h2 className="text-md text-tertiary">{sectiontitle}</h2>
                <Button varient="filterBtn">
                    <ArrowDownUp className="w-4 h-4 sm:w-5 sm:h-5" size={18} strokeWidth={1.5} />
                    <p className="hidden md:block text-md text-tertiary">Date</p>
                </Button>
            </div>
        </>
    )
}