import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">All Players</Link>
        </li>
        {/* You can add more links here if needed */}
        <li className="nav-item">
          <Link to="/new-player" className="nav-link">Create New Player</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
