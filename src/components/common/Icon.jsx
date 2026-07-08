const varients = {
    navIcon: "md:hidden block",
    navIcons: "mr-2",
    userIcon: "p-2 border-[0.5px] bg-card-border rounded-4xl",
    feature: "py-3 px-1",
    formIcon: "text-green"
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