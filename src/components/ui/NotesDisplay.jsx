import { Trash2 } from "lucide-react"
import { DeleteData } from "../../Form/FormHandler"

const Display = {
    error: {icon: "border-red-400",background: "from-red-300 to-red-100"},
    nothing: {icon: "border-yellow-400",background: "from-yellow-100 to-yellow-50"},
    notFound: {icon: "border-red-300",background: "from-red-100 to-red-50"}
}

export const ErrorCard = ({cardtitle,carddescription,children,type}) => {

    return(
        <div className="fl-jt-ct h-screen">
            <div class={`max-w-md mx-auto px-10 py-3 border border-white rounded-lg bg-gradient-to-b ${Display[type].background} flex self-start space-x-3 shadow-md`}>
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

export const Card = ({notesObj}) => {

    const dateObj = new Date(notesObj.created_at)
    const date = dateObj.toLocaleDateString();

  return (
    <div className="service-card m-5 shadow-xl cursor-pointer snap-start shrink-0 py-4 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300">
      <div className="fl-bt w-full">
        <p className="font-bold text-2xl text-black/80">
          {notesObj.title}
        </p>
        <Trash2 className="self-end text-slate-400 hover:text-red-300 duration-400" onClick={() => DeleteData(notesObj.id)} />
      </div>
      <p className="text-gray-400 text-sm">
        {notesObj.description}
      </p>
      <p className="text-slate-600 self-end">
        {date}
      </p>
    </div>
  );
}

export const CardAllDetails = () => {
  return(
    <div className="gradient-bg absolute h-screen w-screen">
        <div>
          <p></p>
        </div>
    </div>
  )
}