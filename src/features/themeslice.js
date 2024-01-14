import { createSlice } from "@reduxjs/toolkit";

const local_storage_theme = localStorage.getItem('theme')
const initialTheme = local_storage_theme ? local_storage_theme : 'light'

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialTheme,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme
        }
    }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer