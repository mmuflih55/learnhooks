import { useReducer } from 'react';

const reducer = (state,action) => {
 
	switch (action.type){
		case 'gantinama':{
			return {...state,profile:{name:action.val}}
		}
        break;
        default:
            return state
	}
}

const initState = {
    profile:{
        name: "Muhammad Muflih"
    }
}

const Reducer = ()=>{
    const[state,dispatch] = useReducer(reducer,initState);
    return {state,dispatch}
}

export default Reducer;