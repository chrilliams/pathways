import React from "react"
import CardColumns from "react-bootstrap/CardColumns"
import Card from "react-bootstrap/Card"

export default function Template({ topic, grade }) {
  const FrameworkCriteria = ({ value }) => {
    console.log(value)
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

  return (
    <>
      {/* {frameworkCriteria}
      {JSON.stringify(topic)} */}
      <CardColumns className="pt-3">
        {topic.map(({ name, content }) => (
          <>
            <Card key={name} className="border-primary ">
              <Card.Header className="bg-primary text-white">
                {name}
              </Card.Header>

              <Card.Body>
                <Card.Text>
                  <FrameworkCriteria value={content} />
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        ))}
      </CardColumns>
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
