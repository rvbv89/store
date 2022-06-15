import React from "react";
import { Container } from "semantic-ui-react";
import CardGroup from "./CardGroup";

export default function Home({ navigateToProductPage, loadingProducts }) {
  return (
    <div>
      <div
        className="ui center aligned header"
        style={{
          minWidth: "100%",

          height: "20em",
          backgroundColor: "#EEBC77",

          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "block",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <h2 className="ui huge header">The Big Something Event!</h2>
          <h1
            className="ui huge header"
            style={{ fontStyle: "italic", fontWeight: "lighter" }}
          >
            Some Sort Of Discount Available!
          </h1>
        </div>
      </div>

      <Container id="card-container" centered fluid style={{ padding: 30 }}>
        <CardGroup
          centered
          loadingProducts={loadingProducts}
          navigateToProductPage={navigateToProductPage}
        />
      </Container>
    </div>
  );
}
