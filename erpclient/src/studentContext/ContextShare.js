import React, { createContext, useState } from 'react'
// CRS2
export const registerContext = createContext()

//1 context for delete alert
export const deleteContext = createContext()


// CRS1 load rfce export & create Context()
// CRS4 then goto studentregister.js
function ContextShare({ children }) {
    const [registerData, setregisterData] = useState("")
    const [deleteData, setDeleteData] = useState("")

    return (
        <div>
            {/* 2 */}
            <deleteContext.Provider value={{ deleteData, setDeleteData }}>
                {/* CRS3 */}
                <registerContext.Provider value={{ registerData, setregisterData }}>
                    {children}
                </registerContext.Provider>
            </deleteContext.Provider>
        </div>
    )
}

export default ContextShare