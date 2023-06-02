import {createContext, useState} from "react";

export const MyCat = createContext(null)

export const AppCat = ({children})=>{
    const [cat ,setCat] = useState()

    return (
        <MyCat.Provider value={{cat, setCat}}>
            {children}
        </MyCat.Provider>
    )
}