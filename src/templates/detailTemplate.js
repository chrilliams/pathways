import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

export default function Template({ topic, selectedGrade }) {
  const FrameworkLevel = ({ value, level, levels }) => {
    console.log(selectedGrade)
    console.log(levels)

    console.log(levels[selectedGrade] + "  " + level)
    const fadeout = levels[selectedGrade] !== level

    return (
      <Row className={"border-bottom " + (fadeout ? "fadeout" : "")}>
        <Col className="bg-primary text-white" md={2}>
          {level}
        </Col>
        <Col md={10}>
          <Row className="border-bottom">
            <Col className="bg-secondary text-white" md={3}>
              Description
            </Col>
            <Col md={9}>{value.description}</Col>
          </Row>
          <Row>
            <Col className="bg-secondary text-white" md={3}>
              Indicators
            </Col>
            <Col md={9}>
              <FrameworkIndicators value={value} />
            </Col>
          </Row>
        </Col>
      </Row>
    )

    //return <li>{JSON.stringify(value.filter(objContent => objContent.grade === grade))}</li>
  }

  const FrameworkIndicators = ({ value }) => {
    let toRender = []
    value.indicators.map((val, i) =>
      toRender.push(<li key={i + "-" + Math.random()}>{val}</li>)
    )
    return toRender

    //return <li>{JSON.stringify(value.filter(objContent => objContent.grade === grade))}</li>
  }

  return (
    <>
      {topic.map(({ name, pathway, levels, description }) => (
        <div key={name} className="mt-3">
          <h3 className="primary">{name}</h3>

          <Container className="border-top border-1 border-dark">
            <FrameworkLevel
              value={pathway.awareness}
              level="Awareness"
              levels={levels}
            />
            <FrameworkLevel
              value={pathway.working}
              level="Working"
              levels={levels}
            />
            <FrameworkLevel
              value={pathway.practitioner}
              level="Practitioner"
              levels={levels}
            />
            <FrameworkLevel
              value={pathway.expert}
              level="Expert"
              levels={levels}
            />
          </Container>
        </div>
      ))}
    </>
  )
}
