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
              Home
            </Link>
            <Link to={"/ncnews/users"} className="header-link">
              Users
            </Link>
            <Link to={"/ncnews/topics"} className="header-link">
              Topics
            </Link>
            <Link to={"/ncnews/login"} className="header-link">
              Login
            </Link>
          </nav>
      </header>
    );
  };

  