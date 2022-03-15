import { useState } from "react";

interface User{
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: "Test",
    name: "Prueba"
}

export const Usuario = () => {

    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: "ABC123",
            name: "Jose Toquica"
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>

            { (user) ? <pre>{JSON.stringify(user)}</pre> : <h4>No hay usuarios</h4> } 

            <button className="btn btn-primary" onClick={login}>
                Login
            </button>
        </div>
    )
}
