import { useState, useEffect } from "react";
import { getUsers , createUser} from "../api/api";


function CreateUser(){
    const [data, setData] = useState([]);

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

        <form onSubmit={}>
            <input type="text" placeholder="name"/>

            <input type="text" placeholder="last name"/>
            

            <input type="text" placeholder="user name"/>
            
            
            <input type="email" placeholder="email" />
            

            <input type="date" min="1971-01-01" max="2023-01-01"/>

                <button>save</button>
        </form>
        </>
    )
}

export default CreateUser;