import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="dropdown">
      <div className="dropbtn"><i className="fa-solid fa-bars"></i></div>
      <div className="dropdown-content">
        <Link to = "/articles"> Articles </Link>
        <Link to = "/profile"> Profile </Link>
        <Link to = "/settings"> Settings </Link>
      </div>
    </div>
  );
};

export default Nav