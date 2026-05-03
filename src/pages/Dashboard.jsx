import { ClockFading,CircleUserRound } from 'lucide-react';

const Dashboard = () => {
    return(
        <div className='fl-ct w-full h-screen gradient-bg'>
            <nav className='fl-bt'>
                    <ClockFading className='dash-icon' />
                    <CircleUserRound className='dash-icon' />
            </nav>
            <div className='w-5/7'>
                <div className='preview-show'>hello world</div>
            </div>
        </div>
    )
}

export default Dashboard;