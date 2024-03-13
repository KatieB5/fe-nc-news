import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header className="header-container">
          <div className="title-container">
            <h1>NC News</h1>
            <p>Your daily dose of knowledge</p>
          </div>
          <nav className="link-container">
            <Link to={"/"} className="header-link">
              <p>Home</p>
            </Link>
            <Link to={"/ncnews/users"} className="header-link">
              <p>Users</p>
            </Link>
            <p className="header-link">Login</p>
          </nav>
      </header>
    );
  };

  