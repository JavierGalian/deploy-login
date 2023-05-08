import { useState, useEffect } from "react";
import { getUsers } from "../api/api";
function CreateUser(){

    const [data, setData] = useState();

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
        </>
    )
}

export default CreateUser;