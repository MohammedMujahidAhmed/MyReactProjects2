import { createContext, useState } from "react"

export const ColorThemContext = createContext();

export default function ColorThemContextProvider({children}){

    const [headerColor,setHeaderColor] = useState('black');
    const [headerBg,setHeaderBg] = useState('white');
    const [theme,setTheme] = useState('Light');
    const [bluecolor,setBlueColor] = useState('blue-500');
    
    // function changeDark(){
    //     setHeaderColor('white');
    //     setHeaderBg('black');
    //     setTheme('Dark');
    // }

    // function changeLight(){
    //     setHeaderColor('white');
    //     setHeaderBg('black');
    //     setTheme('Light');
    // }

    async function ForTheme(t){
        if(t === 'Light'){
            setTheme('Dark');
            setHeaderColor('white');
            setHeaderBg('black');
            // changeDark();
        }else{
            setTheme('Light');
            setHeaderColor('black');
            setHeaderBg('black');
            // changeLight();
        }
    }

    const colorValue = {
        headerColor,
        setHeaderColor,
        headerBg,
        setHeaderBg,
        theme,
        ForTheme,
        bluecolor,
        setBlueColor
    }

    return <ColorThemContext.Provider value={colorValue}>
        {children}
    </ColorThemContext.Provider>

}