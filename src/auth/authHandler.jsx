import { handleRegister,handleLogin,userProfile } from "../Database/Supabase-client";

export const handleAuthSubmit = async ({ type, data, navigate, setSuccess ,setError, timeRef }) => {
  try {
    let user;

    if (type === "register") {
      user = await handleRegister(data);
    } else if (type === "login") {
      user = await handleLogin(data);
    }

    const profile = await userProfile(user.id);

    if(type === "register") {
        setSuccess("Account created successfully")
    }else{
        setSuccess("Login successfully")
    }

    timeRef.current = setTimeout(() => {
      navigate("/library/all-notes");
    }, 3000);

  } catch (error) {
    setError(`${type} failed. Try again later.`);
  }
};