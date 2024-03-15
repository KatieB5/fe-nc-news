import {useState, useEffect} from 'react';
import {getUsers} from '../api';
import {ErrorPage} from './ErrorPage';

export const UsersList = () => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getUsers().then((data) => {
            setUsersList(data);
            setIsLoading(false);
        }).catch((err) => {
            setErr(err.response);
        })
    }, []);

    if (err) {
        return <ErrorPage message={err.data.msg} status={err.status}/>
    }

    if (isLoading) {
        return <p>Just getting the NC News users for you...</p>
    }


    return (
        <>
            <h2>NC News Users</h2>
            <section>
                <ul>
                    {usersList.map((user) => {
                        return <li className="user-list-item" key={user.username}>
                            <img src={user.avatar_url} id="user-image"/>
                            <h4>{user.name}</h4>
                            <p>{user.username}</p>
                        </li>
                    })}
                </ul>
            </section>
        </>
        )
}