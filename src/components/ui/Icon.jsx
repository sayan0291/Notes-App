const varients = {
    logo: "text-logo flex gap-1 p-2 text-[clamp(12px,1.4vw,15px)] font-medium",
    navIcon: "md:hidden block",
    navIcons: "mr-2",
    userIcon: "p-2 border-[0.5px] bg-card-border rounded-4xl"
}

export const Icon = ({varient="logo",children}) => {
    return(
        <>
            <div className={`${varients[varient]}`}>
                {children}
            </div>
        </>
    )
}