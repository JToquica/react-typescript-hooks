import { useReducer, useState } from 'react';

const initialState = {
    contador: 10,
}

type ActionType = 
    | {type: 'incrementar'}
    | {type: 'decrementar'}
    | {type: 'custom', payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType ) => {
    switch(action.type){
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            };
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1 
            };
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }
}

export const ContadorRedu = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

    const [custom, setCustom] = useState<number>(0);

    return (
        <>
            <h2>Contador: {contadorState.contador}</h2>
            <input className="form-control" type="number" name="customNumber" placeholder="Ingrese valor:" onChange={(e) => (parseInt(e.target.value) > 0 ) && setCustom(parseInt(e.target.value))}></input>
            <br/>
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'incrementar'})} >
                +1
            </button>

            <button className="btn btn-danger" onClick={() => dispatch({ type: 'decrementar'})} >
                -1
            </button>

            <button className="btn btn-warning" onClick={() => dispatch({ type: 'custom', payload: custom})} >
                {custom}
            </button>
        </>
    ) 
}
