const varients = {
    folderButtn: "text-slate-200 hover:text-white duration-300",
    transparent: "text-xl text-gray-500 fl-ct gap-3",
    notebuttn: "bg-red-400 px-5 py-2 rounded-3xl",
    userbuttn: "bg-[rgba(0,0,0,0.75)] shadow p-3 rounded-[50%]",
    addbuttn: "bg-red-500 px-5 py-2 rounded-3xl hover:bg-red-400 duration-300",
    cancelbuttn: "bg-gray-500 px-5 py-2 rounded-3xl hover:bg-gray-400 duration-700",
}

export default function Button({varient,children, ...props}){

    return(
        <>
            <button className={`${varients[varient]}`} {...props}>{children}</button>
        </>
    )
}