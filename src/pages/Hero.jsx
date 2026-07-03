import { motion, AnimatePresence } from "motion/react";
import { Sparkles,CloudSync,ScanSearch,PenTool } from "lucide-react"
import { FadeUp, Pulse, PulseNode, SlideSection, WordFadeUp } from "../components/animation/Animation"
import { Navbar } from "../components/shared/Navbar.jsx"
import ConnectAnimate from "../components/animation/ConnectAnimate.jsx";
import { Icon } from "../components/common/Icon.jsx";

const features = [
    { id: 1,name: "Clean UI",description: "Zero distractions. An interface that disappears so your ideas can shine.",logo: <Sparkles strokeWidth={1} style={{backgroundColor: ""}} />,x: -40,delay: 0.1 },
    { id: 2,name: "Cloud Sync",description: "Your notes, everywhere. Sync seamlessly across all your devices in real-time.",logo: <CloudSync strokeWidth={1} style={{backgroundColor: ""}} />,x: 0,delay: 0.5 },
    { id: 3,name: "Smart Search",description: "Find anything instantly. Intelligent indexing helps you locate ideas in seconds.",logo: <ScanSearch strokeWidth={1} style={{backgroundColor: ""}} />,x: 40,delay: 0.2 },
]

export const Hero = () => {
    return(
        <div className="landing-page">
            <Navbar />
            <div className="w-full flex-jc-ic">
                <div className="flex-jc-ic flex-col h-screen">
                    <div className="bg-center bg-cover">
                        <img src="sticky-note.png" alt="desktop note" className="h-70" />
                    </div>
                    <h2>Capture thoughts, find focus.</h2>
                    <h3>The minimalist note-taking app designed for clarity.</h3>
                </div>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {features.map(obj => (
                    <FadeUp key={obj.id} delay={obj.delay} >
                        <div className="max-w-[300px] bg-slate h-40 p-2 rounded-md my-4">
                            <div className="rounded-sm bg-mint">
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
        </div>
    )
}