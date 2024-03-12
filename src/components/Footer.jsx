import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <Link to={"https://www.instagram.com/"} target={"_blank"}>
            <p>Instagram</p>
        </Link>
        <Link to={"https://www.facebook.com/"} target={"_blank"}>
            <p>Facebook</p>
        </Link>
        <Link to={"https://twitter.com/"} target={"_blank"}>
            <p>X</p>
        </Link>
      </nav>
    </footer>
  );
};