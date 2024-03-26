import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { doLogOut } from "../../redux/action/accountAction";
const Header = () => {
  const handleLogin = () => {
    // navigate(`${process.env.REACT_APP_BACKEND_SSO_LOGIN}`);
    window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`;
  };
  const user = useSelector((state) => state.account.userInfo);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(doLogOut());
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </Nav>
            {user && user.access_token && (
              <Nav>
                <Nav.Link href="#">Welcome {user.email}</Nav.Link>
              </Nav>
            )}

            <Nav>
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                {user && user.access_token ? (
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item onClick={() => handleLogin()}>
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
