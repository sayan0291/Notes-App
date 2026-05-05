import React from 'react';
import { ClockFading,UserRound,OctagonAlert,TriangleAlert } from 'lucide-react';
import Button from '../components/ui/Buttons.jsx';
import { ReadData } from '../Form/FormHandler';
import { Card,ErrorCard } from '../components/ui/NotesDisplay';
import NotesContext from '../Context/NotesContext/NotesContext.js';

const Dashboard = () => {
    const { notes,setNotes } = React.useContext(NotesContext)
    React.useEffect(() => {
        ReadData(setNotes);
    })

    return(
        <div className='fl-it-ct flex-col gradient-bg'>
            <div className='fl-bt w-3/6 pt-4'>
                <Button varient="transparent">
                    <small>recent</small>
                </Button>
                <Button varient="userbuttn" >
                    <UserRound className='text-violet-400' />
                </Button>
            </div>
            <div className='w-5/7 h-full'>
                {
                    notes == null ? (
                            <ErrorCard type="error" cardtitle="error!!!" carddescription="Something Went Wrong" >
                                <TriangleAlert color="#ff0f0f" className="text-yellow-300" strokeWidth={2} />
                            </ErrorCard>
                        ) : notes.length !== 0 ? (
                            notes.map((obj,index) => <Card key={obj.id} notesObj={obj} />)
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

export default Dashboard;