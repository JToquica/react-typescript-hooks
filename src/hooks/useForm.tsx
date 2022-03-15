import { ChangeEvent, useState } from "react";


// <T extends Array>
export const useForm = <T extends Object> (initState: T) => {

    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [ name ] : value
        });
    };

    return {
        formulario,
        handleChange
    }
}
