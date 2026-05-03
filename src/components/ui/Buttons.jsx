const varients = {
    transparent: "text-base text-gray-200 hover:text-gray-300 duration-300",
    notebuttn: "bg-red-400 px-5 py-2 rounded-3xl",
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