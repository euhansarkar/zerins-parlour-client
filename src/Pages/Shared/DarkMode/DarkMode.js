import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DarkContext = createContext();

const DarkMode = ({children}) => {

    const [dark, setDark ] = useState(false);

    const handleDark = () => {
        setDark(!dark);
        localStorage.setItem(`dark-mode`, !dark)
    }

    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem(`dark-mode`));
        setDark(localDark);
    }, [])

    useEffect(() => {
        if(dark){
            document.querySelector(`html`).setAttribute(`data-theme`, "dark");
        }else{
            document.querySelector(`html`).setAttribute(`data-theme`, "defaultTheme");

        }
    }, [dark])

    const info = {handleDark, dark}

    return (
        <DarkContext.Provider value={info}>
            {
                children
            }
        </DarkContext.Provider>
    );
};

export default DarkMode;