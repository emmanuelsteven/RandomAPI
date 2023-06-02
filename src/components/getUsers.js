import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/users/usersSlice";



const User =  ()  => {
    const users = useSelector ((state)=> state.users)
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getUsers());

    },[dispatch]);
    return (
        <div>
            <h1>List Of Users</h1>
            {users.isLoading && <div>Loading...</div>}
            {!users.isLoading && users.error ? <div>Error:{users.error}</div> : null}
            {!users.isLoading && users.users.length ?(
                <ul>
                    {users.users.map(user => (
                        <li key={user.login.uuid}>{user.name.first}, {user.name.last}</li>))}
                </ul>) : null}
        </div>
    )
}

export default User;