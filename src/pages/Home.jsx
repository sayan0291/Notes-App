const FirstSection = () => {
    return(
        <>
            <div className="fl-ct flex-col h-[80vh]">
                    <h3 className="text-3xl font-bold mb-3">Get Started Now</h3>
                        <div className="w-3/8 relative flex flex-col items-center justify-center">
                            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-full blur-sm"></div>
                            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full"></div>
                            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
                            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-1/2"></div>
                            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    <p className="mt-6 text-sm">
                        Be part of millions people around the world using modern User Interfaces.
                    </p>
                </div>
        </>
    )
}

export const Home = () => {
    return(
            <div className="relative gradient-bg">
                <FirstSection />
          </div>

    )
}