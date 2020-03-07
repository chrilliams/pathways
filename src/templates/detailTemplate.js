import React, { useState } from "react"
import { graphql } from "gatsby"
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function Template({ topic, grade }) {
  const frameworkCriteria = topic[0].content
    .filter(objContent => objContent.grade === grade)
    .map(objContent =>
      objContent.criteria != null
        ? objContent.criteria.map((val, i) => (
            <li key={i + "-" + Math.random()}>{val}</li>
          ))
        : null
    )

  return (
    <>
      {frameworkCriteria}
      {/* <ul>
        {Object.keys(topic).map(key => (
          <div key={key} details={topic[key]}>
            {JSON.stringify(topic[key].content)}
          </div>
        ))}
      </ul> */}
    </>
  )
}
