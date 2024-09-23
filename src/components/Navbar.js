import './Navbar.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #282c34;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  );
};

export default Navbar;
