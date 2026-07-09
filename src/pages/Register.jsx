import { useForm } from "react-hook-form"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User,Mail,LockKeyhole } from "lucide-react";
import { Logo } from "../components/shared/Navbar"
import { FormCheckBox, FormInput } from "../Form/FormUi.jsx"
import { Icon } from "../components/common/Icon";
import Button from "../components/common/Button.jsx";

const formInput = [
    {id: 1,labelName: "Full Name",inputIcon: <User strokeWidth={1} />,type: "text",placeholder: "Enter Your Full Name",registerFor: "name"},
    {id: 2,labelName: "Email Address",inputIcon: <Mail strokeWidth={1} />,type: "email",placeholder: "you@gmail.com",registerFor: "email"},
    {id: 3,labelName: "Password",inputIcon: <LockKeyhole strokeWidth={1} />,type: "password",placeholder: "Min 6 Characters",registerFor: "password"},
]

export const Register = () => {
    // const [error,setError] = useState("")

    const { register,handleSubmit,formState: { errors,isSubmitting } } = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        console.log(data);
    };

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
                                <div className="w-[75%] glass-card">
                                    <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
                                        {
                                            formInput.map(obj => (
                                                                    <div className="flex flex-col gap-2" key={obj.id} >
                                                                        <label>{obj.labelName}</label>
                                                                        <div>
                                                                            <Icon varient="formIcon">
                                                                                {obj.inputIcon}
                                                                            </Icon>
                                                                            <FormInput
                                                                                id={obj.registerFor}
                                                                                type={obj.type} 
                                                                                placeholder={obj.placeholder} 
                                                                                registerFor={obj.registerFor} 
                                                                                register={register} 
                                                                                error={errors[obj.registerFor]}
                                                                            />
                                                                        </div>
                                                                        {errors[obj.registerFor] && (
                                                                            <p className="text-red-500 text-xs">
                                                                                {errors[obj.registerFor].message}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                            ))
                                        }
                                        <div className="flex-ic ml-1 gap-2 ">
                                            <FormCheckBox register={register}
                                                registerFor="terms" 
                                                error={errors.terms}
                                            />
                                            <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
                                        </div>
                                        {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}
                                        <Button varient="logBtn" disabled={isSubmitting} >
                                            {isSubmitting ? "Creating..." : "Create Account"}
                                        </Button>
                                    </form>
                                    <div className="w-full flex-jc h-1">
                                        <div className="h-[1px] bg-toolbar/30 opacity-50 shadow-md rounded-md w-[65%]" />
                                    </div>
                                    <div className="w-full py-4 flex-jc">
                                        <p className="">Already have an account? <NavLink className="text-blue-600 hover:text-blue-500 transition-colors duration-all" to="/login" >Sign UP</NavLink></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}