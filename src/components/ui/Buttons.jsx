const varients = {
    menuBtn: "mr-2 text-[#FFFFFF]",
    notebuttn: "bg-red-400 px-5 py-2 rounded-3xl",
    filterBtn: "flex gap-1 text-tertiary",
    toolbarBtn: "bg-transparent transition-colors p-1 text-[#CCCCCC] hover:bg-toolbar-change hover:text-[#888888] duration-250 rounded-md mx-2 border-divider border-[0.01em]",
    userbuttn: "bg-[rgba(0,0,0,0.75)] shadow p-3 rounded-[50%]",
    addbuttn: "bg-red-500 px-5 py-2 rounded-3xl hover:bg-red-400 duration-300",
    cancelbuttn: "bg-gray-500 px-5 py-2 rounded-3xl hover:bg-gray-400 duration-700",
}

export default function Button({varient="menuBtn",children, ...props}){

    return(
        <>
            <button className={`${varients[varient]}`} {...props}>{children}</button>
        </>
    )
}