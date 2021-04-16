import React from "react";
import { useState } from "react";
import { Button, Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigasi() {
  const [Keyword, setKeyword] = useState();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="./"><Navbar.Brand>ANGSA NEWS</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav className="mr-3">
              <Link className="text-white" to="/Home">
                Home
              </Link>
            </Nav>
            <Nav className="mr-3">
              <Link className="text-white" to="/Nasional">
                Nasional
              </Link>
            </Nav>
            <Nav className="mr-3">
              <Link className="text-white" to="/Internasional">
                Internasional
              </Link>
            </Nav>
            <Nav className="mr-3">
              <Link className="text-white" to="/Olahraga">
                Olahraga
              </Link>
            </Nav>
            <Nav className="mr-3">
              <Link className="text-white" to="/Ekbis">
                Ekbis
              </Link>
            </Nav>
            {/* API detail belum dibuat */}
            {/* <Nav className="mr-3">
              <Link className="text-white" to="/Lifestyle">
                Lifestyle
              </Link>
            </Nav> */}
            {/* API detail belum dibuat */}
            {/* <Nav className="mr-3">
              <Link className="text-white" to="/Teknologi">
                Teknologi
              </Link>
            </Nav> */}
            {/* API detail belum dibuat */}
            {/* <Nav className="mr-3">
              <Link className="text-white" to="/kalam">
                Kalam
              </Link>
            </Nav> */}
          </Nav>
          <Nav>
            <FormControl
              type="text"
              placeholder="Cari Berita"
              className="mr-sm-2"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Link to={`/Cari/${Keyword}`}>
              <Button variant="outline-success">Cari</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
