import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import logo from "../../static/images/dvla_blk_aw.png"
import dvlaHive from "../../static/images/ddat_ident_wide.png"

const Header = ({ siteTitle }) => (
  <>
    <Container>
      <Row className="d-flex flex-wrap align-items-center">
        <Col xs={2}>
          <img
            className="align-middle"
            style={{ maxWidth: "75%" }}
            src={logo}
            alt="Logo"
          />
        </Col>
        <Col xs={{ span: 4, offset: 6 }}>
          <img src={dvlaHive} alt="dvlaHive" />
        </Col>
      </Row>
    </Container>

    <Navbar className="p-0" bg="secondary" variant="dark">
      <Container>
        <Nav activeKey="/" className="flex-fill justify-content-center">
          <Nav.Item className="flex-fill">
            <Link
              to="/"
              activeClassName="active"
              className="nav-link text-center"
            >
              Home
            </Link>
          </Nav.Item>

          <Nav.Item className="flex-fill">
            <Link
              to="/who"
              activeClassName="active"
              className="nav-link text-center"
            >
              Who we are
            </Link>
          </Nav.Item>
          <Nav.Item className="flex-fill">
            <Link
              to="/working"
              activeClassName="active"
              className="nav-link text-center"
            >
              Working here
            </Link>
          </Nav.Item>
          <Nav.Item className="flex-fill">
            <Link
              to="/people"
              activeClassName="active"
              className="nav-link text-center"
            >
              People Promise
            </Link>
          </Nav.Item>
          <Nav.Item className="flex-fill">
            <Link
              to="/pathways"
              activeClassName="active"
              className="nav-link text-center"
            >
              Pathways
            </Link>
          </Nav.Item>
          <Nav.Item className="flex-fill">
            <Link
              to="/faq"
              activeClassName="active"
              className="nav-link text-center"
            >
              FAQs
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
