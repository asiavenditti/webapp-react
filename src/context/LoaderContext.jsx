import { createContext, useContext, useState } from "react";

// creo il context
const LoaderContext = createContext();


function LoaderProvider({ children }) {


    // imposto lo stato 
    const [isLoading, setIsLoading] = useState(false)

    return (


        <LoaderContext.Provider value={{
            isLoading, setIsLoading
        }}>
            {children}
        </LoaderContext.Provider>

    )

};

// hook
function useLoaderContext() {
    return useContext(LoaderContext)
};

// esporto 
export { LoaderProvider, useLoaderContext };