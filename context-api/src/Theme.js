import { createContext } from 'react'

export const themes = {
    primary: {
        background: '#000',
        color: '#efefef'
    },
    secondary: {
        background: '#efefef',
        color: '#000'
    }
}

export const ThemeContext = createContext(themes.secondary)