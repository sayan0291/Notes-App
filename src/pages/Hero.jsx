import { NavLink } from "react-router-dom";
import { Sparkles,CloudSync,ScanSearch,PenTool } from "lucide-react"
import { FadeUp, Pulse, PulseNode, SlideSection, Starfield, WordFadeUp } from "../components/animation/Animation"
import { Logo, Navbar } from "../components/shared"
import { Icon,Button } from "../components/common";
import useAuth from "../hooks/useAuth.js"

const features = [
    { id: 1,name: "Clean UI",description: "Zero distractions. An interface that disappears so your ideas can shine.",logo: <Sparkles strokeWidth={1.5} className="text-mid-1-green" />,x: -40,delay: 0.1 },
    { id: 2,name: "Cloud Sync",description: "Your notes, everywhere. Sync seamlessly across all your devices in real-time.",logo: <CloudSync strokeWidth={1.5} className="text-mid-1-green" />,x: 0,delay: 0.5 },
    { id: 3,name: "Smart Search",description: "Find anything instantly. Intelligent indexing helps you locate ideas in seconds.",logo: <ScanSearch strokeWidth={1.5} className="text-mid-1-green" />,x: 40,delay: 0.2 },
]

export const Hero = () => {
    const { user } = useAuth();

    return(
        <div className="landing-page">
            <Navbar className="w-[95%] z-30 px-5 py-2 absolute top-5" />
            <Starfield>
                <FadeUp delay={0.1} className="flex-ic flex-col">
                    <div className="bg-center bg-cover">
                        <img src="sticky-note.png" alt="desktop note" className="h-70" />
                    </div>
                    <h2>Capture thoughts, find focus.</h2>
                    <h3>The minimalist note-taking app designed for clarity.</h3>
                </FadeUp>
            </Starfield>
            <div className="mb-stack-lg py-3">
                <FadeUp className="w-full aspect-[4/3] overflow-hidden p-4 rounded-xl glass-card">
                    <img className="w-full h-full rounded-lg bg-cover bg-center" src="desktop-image.png" alt="desk image" />
                </FadeUp>
                <FadeUp className="py-3 bg-[#FFE67C] my-3 flex-jc-ic w-full gap-2">
                    <div className="bg-red p-2 rounded-4xl">
                        <PenTool className="rotate-270 text-yellow" />
                    </div>
                    <WordFadeUp text="Write your all notes here" className="text-lg text-green font-angkor font-medium" />
                </FadeUp>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 w-[80%]">
                {features.map(obj => (
                    <FadeUp key={obj.id} delay={0.1} >
                        <div className="feature-card glass-card">
                            <div className="w-12 h-12 bg-mid-green/20 rounded-lg flex-jc-ic mb-4">
                                <Icon varient="feature">
                                    {obj.logo}
                                </Icon>
                            </div>
                            <h4>{obj.name}</h4>
                            <small>{obj.description}</small>
                        </div>
                    </FadeUp>
                ))}
            </div>
            {
                !user ? (
                    <FadeUp className="bg-mint rounded-lg w-[79%] flex-jc-ic mb-4">
                        <div className="flex-jc-ic p-5 flex-col gap-3">
                            <h5 className="font-croissant text-toolbar">Start your journey to organized thoughts today.</h5>
                            <Button varient="joinBtn" >
                                <NavLink to="/register" >Join Now</NavLink>
                            </Button>
                        </div>
                    </FadeUp>
                ) : ""
            }
            <footer className="border-thin border-l-0 border-r-0 border-b-0 border-toolbar/20 w-[100%]">
                <div className="w-[100%] flex-jc-ic p-5 bg-yellow/20">
                    <Logo />
                </div>
            </footer>
        </div>
    )
}