const { createContext, useContext} = require("react");

// context creation

const movableContext = createContext();



// function provider

export function UserProviderElements({Children}){
    return(
    <movableContext.Provider>
        {Children}
    </movableContext.Provider>)
};

// export userContext provider 

export function useContextElements() {
    return useContext(movableContext)
}