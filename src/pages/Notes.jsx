import { Search,NotebookPen,Folder,Plus,TriangleAlert,OctagonAlert  } from "lucide-react";
import {useState,useForm, useEffect} from "react"
import {Link} from "react-router-dom"
import Button from "../components/ui/Buttons";
import NotesAdd from "../components/ui/NotesAdd";
import { ReadData } from "../Form/FormHandler";
import { ErrorCard,Card } from "../components/ui/NotesDisplay";

const SearchInput = () => {
    return(
        <>
            <div className="search">
                <div className="p-2">
                    <Search className="text-blue-400" />
                    <input type="text" placeholder="Search Your Notes" />
                </div>
            </div>
        </>
    )
}

const Notes = () => {
    const [showSection,setShowSection] = useState(false)
    const [data,setData] = useState([])

    useEffect(() => {
        ReadData(setData);
    },[])

    return(
        <div className='fl-jt-ct flex-col gradient-bg'>
            <div className='fl-bt w-5/7'>
                <SearchInput />
            </div>
            <div className="flex justify-between w-5/7 pt-5">
                <Button varient="notebuttn">
                    <div className="flex text-white gap-2">
                        <NotebookPen />
                        <h4>Notes</h4>
                    </div>
                </Button>
                <div className="fl-it-ct h-10 document-card gap-2">
                    <Folder />
                    <Button varient="folderButtn" onClick={() => setShowSection(true)}>
                        <Plus />
                    </Button>
                </div>
            </div>
            {showSection && <NotesAdd setShowSection={setShowSection} />}
            <div className="w-5/7 h-full">
                {data == null ? (
                            <ErrorCard type="error" cardtitle="error!!!" carddescription="Something Went Wrong" >
                                <TriangleAlert color="#ff0f0f" className="text-yellow-300" strokeWidth={2} />
                            </ErrorCard>
                        ) : data.length !== 0 ? (
                                data.map((obj,index) =>
                                    <Card key={obj.id} notesObj={obj} />
                            )
                        ) : (
                            <ErrorCard type="nothing" cardtitle="Oh no!" carddescription="You dont have any notes here"  >
                                <OctagonAlert className="text-yellow-300" strokeWidth={2.5} />
                            </ErrorCard>
                        )
                    }
            </div>
        </div>
    )
}

export default Notes;