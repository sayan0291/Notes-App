const varients = {
    transparent: "text-base text-zinc-500 hover:text-zinc-800",
    menubuttn: "md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
}

export default function Button({varient,children}){

    return(
        <>
            <button className={`${varients[varient]}`}>{children}</button>
        </>
    )
}