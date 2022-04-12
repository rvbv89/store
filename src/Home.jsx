import React from 'react'
import { Container } from 'semantic-ui-react'
import CardGroup from './CardGroup'

export default function Home() {
  return (
    <Container
    id="card-container"
    fluid
    style={{ margin: -20, paddingTop: 50 }}
  >
    <div
      className="ui center aligned header"
      style={{
        width: "100%",
        height: "20em",
        backgroundColor: "#EEBC77",
      }}
    >
      <h2 className="ui huge header" style={{ padding: "2em" }}>
        The Big Something Event!
      </h2>
      <h1
        className="ui huge header"
        style={{ fontStyle: "italic", fontWeight: "lighter" }}
      >
        Some Sort Of Discout Available!
      </h1>
    </div>
    <CardGroup />
  </Container>
  )
}
