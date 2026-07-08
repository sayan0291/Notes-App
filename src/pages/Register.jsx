import { Logo } from "../components/shared/Navbar"
import { useForm } from "react-hook-form"
import { FormInput } from "../Form/FormUi.jsx"
import { Icon } from "../components/common/Icon";
import { User,Mail,LockKeyhole } from "lucide-react";

const formInput = [
    {id: 1,labelName: "Full Name",inputIcon: <User strokeWidth={1} />,type: "text",placeholder: "Enter Your Full Name",registerFor: "email"},
    {id: 2,labelName: "Email Address",inputIcon: <Mail strokeWidth={1} />,type: "email",placeholder: "you@gmail.com",registerFor: "email"},
    {id: 3,labelName: "Password",inputIcon: <LockKeyhole strokeWidth={1} />,type: "password",placeholder: "Min 6 Characters",registerFor: "text"},
]

export const Register = () => {

    const { register,handleSubmit,formState: { errors } } = useForm();

    return(
        <>
            <div className="reg-log-page">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="glass-card hidden lg:flex p-4 rounded-lg">
                        <img src="register_image.png" alt="register image" />
                    </div>
                    <div className="form-page">
                            <div className="flex-ic flex-col">
                                <Logo className1="w-[80%]" className2="text-violet"  />
                                <div className="form-desc">
                                    <h3>Create Your Sanctuary</h3>
                                    <h4>Start your journey to mental clarity with organized, focus-driven notes.</h4>
                                </div>
                                <div className="w-[75%]">
                                    <form className="form-section glass-card" onSubmit={handleSubmit}>
                                        {
                                            formInput.map(obj => (
                                                                    <div className="flex flex-col gap-2">
                                                                        <label>{obj.labelName}</label>
                                                                        <div>
                                                                            <Icon varient="formIcon">
                                                                                {obj.inputIcon}
                                                                            </Icon>
                                                                            <FormInput type={obj.type} placeholder={obj.placeholder} registerFor={obj.registerFor} validation={register}/>
                                                                        </div>
                                                                    </div>
                                            ))
                                        }
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}