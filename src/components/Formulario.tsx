import { useForm } from '../hooks/useForm';

interface FormData {
    email: string,
    nombre: string,
    edad: number
}

export const Formulario = () => {

    const {formulario, handleChange} = useForm<FormData>({
        email: "",
        nombre: "",
        edad: 0
    });

    // const initialData = {
    //     email: "",
    //     nombre: ""
    // };

    // const [data, setData] = useState(initialData);

    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>):void => {
    //     const { name, value } = target;
    //     setData({
    //         ...data,
    //         [ name ] : value
    //     });
    // };

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" 
                        className="form-control" 
                        name="email" 
                        onChange={handleChange}
                        value={formulario.email} 
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" 
                        className="form-control" 
                        name="nombre" 
                        onChange={handleChange}
                        value={formulario.nombre}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number" 
                        className="form-control" 
                        name="edad" 
                        onChange={handleChange}
                        value={formulario.edad}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    );
}
