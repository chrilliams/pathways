import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"

export default function Template({ topic, grade }) {
  const FrameworkCriteria = ({ value }) => {
    const toRender = []
    value
      .filter(objContent => objContent.grade === grade)
      .map(objContent =>
        objContent.criteria != null
          ? objContent.criteria.map((val, i) =>
              toRender.push(<li key={i + "-" + Math.random()}>{val}</li>)
            )
          : null
      )
    return toRender

    //return <li>{JSON.stringify(value.filter(objContent => objContent.grade === grade))}</li>
  }

  const Indicators = ({ value }) => {
    console.log(value)
    const toRender = []
    value.map(objContent =>
      objContent.criteria != null
        ? objContent.criteria.map((val, i) =>
            toRender.push(<li key={i + "-" + Math.random()}>{val}</li>)
          )
        : null
    )
    return toRender
  }

  // const FrameworkSkill = ({ value }) => {
  //   let skill = null
  //   console.log(value)

  //   value
  //     .filter(objContent => objContent.grade === grade)
  //     .map(objContent =>
  //       objContent.skill != null
  //         ? (skill = (
  //             <Badge variant="secondary" className="float-right mt-1">
  //               {objContent.skill}
  //             </Badge>
  //           ))
  //         : null
  //     )
  //   return skill

  //   //return <li>{JSON.stringify(value.filter(objContent => objContent.grade === grade))}</li>
  // }

  const FrameworkLevel = ({ value, level }) => {
    let skill = null

    skill = (
      <Row className="border-bottom">
        <Col className="bg-primary text-white" md={2}>
          {level}
        </Col>
        <Col md={10}>
          <Row className="border-bottom" >
            <Col className="bg-secondary text-white" md={3}>Description</Col>
            <Col md={9}>{value.description}</Col>
          </Row>
          <Row>
            <Col className="bg-secondary text-white" md={3}>Indicators</Col>
            <Col md={9}>
              <FrameworkIndicators value={value} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
    return skill

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
      {topic.map(({ name, pathway, description }) => (
        <>
          <div className="mt-3">
          <h3 className="primary">{name}</h3>

            <Container className="border-top border-1 border-dark">
   
              <FrameworkLevel value={pathway.awareness} level="Awareness" />
              <FrameworkLevel value={pathway.working} level="Working" />

              <FrameworkLevel
                value={pathway.practitioner}
                level="Practitioner"
              />
              <FrameworkLevel value={pathway.expert} level="Expert" />
     
            </Container>
          </div>
        </>
      ))}
    </>
  )
}
