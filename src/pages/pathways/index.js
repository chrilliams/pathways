import React from "react"
import { Link } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const PathwaysPage = () => (
  <>
    <h1 className="text-primary pt-3">Career Pathways</h1>
    <p>
      Career pathways are the critical first piece in creating streamlined,
      functional career networks that will help the DVLA offer life-changing
      opportunities.
    </p>
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
        {" "}
        They help everyone that works at DVLA understand where they are at the
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
    goals. And it also assures everyone that all leads are using the same tools
    to assess their performance.
    <p className="text-primary mb-0 mt-2">
      <strong>
        They help us make sure we're taking a consistent approach to the way we
        assess how people are performing, and how we're paying them.
      </strong>
    </p>
    Using frameworks and making them transparent means leads can evaluate
    people's performance against a common set of criteria.
    <h3 className="text-primary pt-3">Things to remember</h3>
    <ul>
      <li>
        There are many different ways to progress and be valuable to DVLA as you
        grow, including deep technical knowledge and ability, technical
        leadership and people management. All are equally valuable paths in
        DVLA's engineering community.
      </li>
      <li>
        The framework represents a career’s worth of progression, people
        shouldn’t expect to fly up it in 18 months!
      </li>
      <li>
        Engineering progression isn’t an exact science and there will always be
        some ambiguity.
      </li>
      <li>
        This isn’t a checklist – it’s possible to progress up a level without
        showing all the behaviours in that level.
      </li>
    </ul>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Cloud Engineering</Card.Title>
            <Card.Text>
              <p>
                A Cloud Engineer designs, builds, manages and supports the
                infrastructure services that underpin all internal user services
                and services to the public.
              </p>
              <Link
                to="/pathways/cloudengineer"
                activeClassName="active"
                className="btn btn-primary"
              >
                Cloud Pathways
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
)

export default PathwaysPage
