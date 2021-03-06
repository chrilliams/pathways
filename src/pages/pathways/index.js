import React from "react"
import { Link } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const PathwaysPage = () => (
  <>
    <h1 className="text-primary pt-3">Career Pathways</h1>
    <p>
      The DVLA Career Pathway will support the growth of our engineers. It’s
      important that such a framework creates a growth pathway for staff and
      outline the future needs of the DVLA. The Framework creates the context to
      communicate career and development options for an employee, while clearly
      delineating expectations to perform the work today, what is needed to grow
      for tomorrow and what avenues are available based on skills already
      obtained. Guidance has been taken from ‘Digital, Data and Technology
      (DDat) Capability Framework’ and the Success Profile.
    </p>
    <b>Career Pathways have three purposes:</b>
    <p className="text-primary mb-0 mt-2">
      <strong>
        They help everyone who works at DVLA understand where they are at the
        moment, and take ownership of their progression.
      </strong>
    </p>
    If you know where you sit on a framework, you can set and work towards goals
    that'll take you to the next level.
    <p className="text-primary mb-0 mt-2">
      <strong>
        They also better equip our technical leads to have more productive
        conversations about progression with the people they manage.
      </strong>
    </p>
    Discussing progression is easier if what's expected of you is clear. Leads
    can use these frameworks to support people to set personal development
    goals. It also assures everyone that leads are using the same tools to
    assess performance.
    <p className="text-primary mb-0 mt-2">
      <strong>
        They help us make sure we're taking a consistent approach to the way we
        assess how people are performing, and how we're paying them.
      </strong>
    </p>
    Using frameworks and making them transparent, means lead engineers can
    evaluate people's performance against a common set of criteria.
    <h3 className="text-primary pt-3">Things to remember</h3>
    <ul>
      <li key="1">
        There are many different ways to progress and be valuable to DVLA as you
        grow, including deep technical knowledge and ability, technical
        leadership and people management. All are equally valuable paths in
        DVLA's engineering community.
      </li>
      <li key="2">
        The framework represents a career’s worth of progression, people
        shouldn’t expect to fly up it in 18 months!
      </li>
      <li key="3">
        Engineering progression isn’t an exact science and there will always be
        some ambiguity.
      </li>
      <li key="4">
        This isn’t a checklist – it’s possible to progress up a level without
        showing all the behaviours in that level.
      </li>
    </ul>
    <Row>
      <Col md={12}>
        <Link to="/pathways/generic" activeClassName="active">
          <Card>
            <Card.Body className="bg-secondary text-white">
              <Card.Title>Generic</Card.Title>
              <Card.Text>Everything for everyone in engineering</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Link to="/pathways/cloudengineer" activeClassName="active">
          <Card>
            <Card.Body className="bg-secondary text-white">
              <Card.Title>Cloud Engineering</Card.Title>
              <Card.Text>
                A Cloud Engineer designs, builds, manages and supports the
                infrastructure services that underpin all internal user services
                and services to the public.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Link to="/pathways/devopsengineer" activeClassName="active">
          <Card>
            <Card.Body className="bg-secondary text-white">
              <Card.Title>DevOps Engineer</Card.Title>
              <Card.Text>
                Development operations engineers support the development and
                operation of software through tools, environments and practices.
                Underpins good development processes including managing tools
                and testing environments, central code control, maintaining
                development standards and writing software that automates
                systems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  </>
)

export default PathwaysPage
