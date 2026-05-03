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
        <input type={type} placeholder={placeholder} {...validation(registerFor,validationRules[registerFor])} />
    )
}

export const FormTextArea = ({type,placeholder,registerFor,validation}) => {
    return(
        <textarea type={type} placeholder={placeholder} {...validation(registerFor,validationRules[registerFor])} />
    )
}