import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header className="header">
          <nav>
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/ncnews/users"}>
              <p>Users</p>
            </Link>
            <p>Login</p>
          </nav>
          <h1>NC News</h1>
          <p>Your daily dose of knowledge</p>
      </header>
    );
  };