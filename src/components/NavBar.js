import { useStat, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Changes colour when scrolling
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        {" "}
        <img src={""} alt="Logo"></img>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        {" "}
        <span className="navbar-toggler-icon"></span>{" "}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#">
              {" "}
              <img src={""} alt=""></img>{" "}
            </a>
            <a href="#">
              {" "}
              <img src={""} alt=""></img>{" "}
            </a>
            <a href="#">
              {" "}
              <img src={""} alt=""></img>{" "}
            </a>
          </div>
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};
