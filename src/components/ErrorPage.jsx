import {Link} from 'react-router-dom'
import { FaHouse } from "react-icons/fa6";

export const ErrorPage = (message) => {

    if (message.status === 400) {
        
        return (
        <section id="bad-path-error-page">
            <p>Booooooo......that page doesn't exist :(</p>
            <Link to={`/`}>
                <button className="take-me-home-button">Take me home <FaHouse /></button>
            </Link>
        </section>
        )
    }

    return (
        <section id="general-error-page">
            <p>Looks like there's been an error!</p>
            <h3>{message.status}</h3>
            <p>{message.message}</p>
            <Link to={`/`}>
                <button className="take-me-home-button">Take me home <FaHouse /></button>
            </Link>
            
        </section>
    )
}