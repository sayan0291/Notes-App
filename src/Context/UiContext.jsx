import { useContext,createContext,useReducer } from "react";
import { UiReducer,initialState } from "./UiReducer";

const UiContext = createContext(null);

export const UiProvider = ({ children }) => {
    const [state,dispatch] = useReducer(UiReducer,initialState);
    return <UiContext.Provider value={{state,dispatch}}>{children}</UiContext.Provider>
}

export const UseUi = () => {
    return useContext(UiContext);
}