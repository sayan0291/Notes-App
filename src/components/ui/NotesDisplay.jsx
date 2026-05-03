const Display = {
    error: {icon: "border-red-400",background: "from-red-300 to-red-100"},
    nothing: {icon: "border-yellow-400",background: "from-yellow-100 to-yellow-50"},
    notFound: {icon: "border-red-300",background: "from-red-100 to-red-50"}
}

export const ErrorCard = ({cardtitle,carddescription,children,type}) => {

    return(
        <div className="fl-jt-ct">
            <div class={`max-w-md mx-auto px-10 py-3 border border-white rounded-lg bg-gradient-to-b ${Display[type].background} flex items-start space-x-3 shadow-md`}>
            <div class="flex-shrink-0">
                <div class={`w-10 h-10 flex items-center justify-center bg-white border ${Display[type].icon} rounded-full`} >
                    {children}
                </div>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-gray-900">{cardtitle}</h3>
                <p class="text-gray-700 text-sm">{carddescription}</p>
            </div>
            </div>
        </div>
    )
}