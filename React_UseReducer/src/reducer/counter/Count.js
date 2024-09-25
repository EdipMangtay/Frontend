export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

 export const Countreducer = (state,action) =>{
    switch(action){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state -1;
        case "RESET":
            return 0;
        default:
            console.log("DEFAULT STATE")
            return state;
    }
}