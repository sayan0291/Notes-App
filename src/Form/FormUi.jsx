const validationRules={
    title: {
        required : {value: true,message: "Title is required"}
    },
    description: {
        required: {value: true,message: "Description is Required"}
    }
}

export const FormInput = ({type,placeholder,registerFor,validation}) => {
    return(
        <input className="w-full outline-none placeholder:text-black/30 placeholder:text-md text-sm text-green" type={type} placeholder={placeholder} {...validation(registerFor,validationRules[registerFor])} />
    )
}

export const FormTextArea = ({type,placeholder,registerFor,validation}) => {
    return(
        <textarea type={type} placeholder={placeholder} {...validation(registerFor,validationRules[registerFor])} />
    )
}