import { useState, useEffect } from "react";
import { getUsers, createUser } from "../api/api";


function CreateUser() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        name_user: '',
        email: '',
        date_birth: '',
    })
    const [formError, setFormError] = useState("");
    useEffect(() => {

        async function loadUsers() {
            const response = await getUsers();
            setData(response.data);
            console.log(response.data);
        }

        loadUsers();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (formData.name_user === '') {
            setFormError("El nombre de usuario es requerido.");
            return;
        }
        // Validar que no existan coincidencias en el correo o el nombre de usuario
        const hasMatch = data.some(
            (user) =>
                user.email === formData.email || user.name_user === formData.name_user
        );
        if (hasMatch) {
            setFormError("El correo o el nombre de usuario ya existen.");
            return;
        }

        try {
            const response = await createUser(formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    return (
        <>
            <h2>create user</h2>
            {formError && <p style={{ color: "red" }}>{formError}</p>}

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                <input type="text" placeholder="last name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />


                <input type="text" placeholder="user name" value={formData.name_user} onChange={(e) => setFormData({ ...formData, name_user: e.target.value })} />


                <input type="email" placeholder="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />


                <input type="date" min="1971-01-01" max="2023-01-01" value={formData.date_birth} onChange={(e) => setFormData({ ...formData, date_birth: e.target.value })} />

                <button type="submit">save</button>
            </form>
        </>
    )
}

export default CreateUser;