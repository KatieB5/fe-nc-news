import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-div">
      <nav id="footer-links-container">
        <Link to={"https://www.instagram.com/"} target={"_blank"} className="footer-link">
            <p>Instagram</p>
        </Link>
        <Link to={"https://www.facebook.com/"} target={"_blank"} className="footer-link">
            <p>Facebook</p>
        </Link>
        <Link to={"https://twitter.com/"} target={"_blank"} className="footer-link">
            <p>X</p>
        </Link>
      </nav>
    </footer>
  );
};