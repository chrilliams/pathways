import React, { useState } from "react"
import { graphql } from "gatsby"
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Detail from "./detailTemplate"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our data
  const { frontmatter, html } = markdownRemark
  const [grade, setGrade] = useState(null)

  return (
    <>
      <Row>
        <Col md={6}>
          <h1 className="text-primary pt-3">
            {frontmatter.title} {grade}
          </h1>
        </Col>
        <Col md={6}>
          <ListGroup className="text-primary pt-3" horizontal>
            <ListGroup.Item
              onClick={() => setGrade("EO")}
              eventKey="EO"
              className="m-1 text-center"
              action
              variant="success"
            >
              EO
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => setGrade("HEO")}
              eventKey="HEO"
              className="m-1 text-center"
              action
              variant="success"
            >
              HEO
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => setGrade("SEO")}
              eventKey="SEO"
              className="m-1 text-center"
              action
              variant="success"
            >
              SEO
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => setGrade("G7")}
              eventKey="G7"
              className="m-1 text-center"
              action
              variant="success"
            >
              G7
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {grade != null ? (
        <Detail
          topic={frontmatter.topics}
          levels={frontmatter.levels}
          selectedGrade={grade}
        />
      ) : (
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        topics {
          levels {
            EO
            HEO
            SEO
            G7
          }
          pathway {
            awareness {
              description
              indicators
            }
            expert {
              description
              indicators
            }
            practitioner {
              description
              indicators
            }
            working {
              description
              indicators
            }
          }
          name
          description
        }
      }
    }
  }
`
