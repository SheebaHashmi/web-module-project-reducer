export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const clearDisplay  = () => {
    return({type:CLEAR_DISPLAY});
}

export const ADD_MEMORY = "ADD_MEMORY";
export const addMemory = () => {
    return({type:ADD_MEMORY});
}
export const MEMORY_READ = "MEMORY_READ";
export const memoryRead = () => {
    return({type:MEMORY_READ})
}