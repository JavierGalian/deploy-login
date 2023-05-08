import { useState, useEffect } from "react";
import { getUsers , createUser} from "../api/api";
import {useForm} from 'react-hook-form';
function CreateUser(){

    const [data, setData] = useState([]);
    //componentes de hook form que facilita el envio de datos
    //formsState maneja el estado del formulario que en este caso lo vamos a majera para controlar errores
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = handleSubmit(async data =>{
        console.log(data)
        const res = await createUser(data);
        console.log(res);
    })

    useEffect(() => {

        async function loadUsers(){
            const response = await getUsers();
            setData(response.data);
            console.log(response.data);
        }

        loadUsers();
    }, []);

    return(
        <>
        <h2>create user</h2>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="name"{...register('name', {required: true})}/>
            {errors.name && <span>name is required</span>}

            <input type="text" placeholder="last name"{...register('last_name', {required: true})}/>
            {errors.last_name && <span>name is required</span>}

            <input type="text" placeholder="user name"{...register('name_user', {required: true})}/>
            {errors.name_user && <span>name is required</span>}
            
            <input type="email" placeholder="email" {...register('email', {required: true})}/>
            {errors.email && <span>name is required</span>}

            <input type="date" min="1971-01-01" max="2023-01-01"{...register('date_birth', {required: true})}/>
            {errors.date_birth && <span>name is required</span>}

                <button>save</button>
        </form>
        </>
    )
}

export default CreateUser;