import { createContext, useContext, useState } from "react";

const layoutContext = createContext()

export function useLayout() {
    const context = useContext(layoutContext)
    return context
}

export function LayoutProvider({ children }) {
    const [layout, setLayout] = useState('Upload')
    const [load, setLoading] = useState(false)

    return <layoutContext.Provider value={{ layout, changeLayout, load, changeLoading}}>{children}</layoutContext.Provider>

    function changeLayout(layout) {setLayout(layout)}

    function changeLoading(load) {setLoading(load)}
}