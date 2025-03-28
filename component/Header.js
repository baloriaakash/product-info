import { Link } from "react-router";
export let Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com//9vHd_q1rA6gbihKoJZSQvP-mdDs=/349x775:1050x1476/fit-in/500x500/99designs-contests-attachments/72/72046/attachment_72046841"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
