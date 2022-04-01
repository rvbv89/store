import React from "react";
import { Icon, Grid, Menu } from "semantic-ui-react";
import SearchFilter from "./SearchFilter";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <Grid columns="equal">
      <Grid.Column floated="left" width={1}>
        <Icon id="icon" name="shopping bag" size="huge" />
      </Grid.Column>
      <Grid.Column width={3}>
        <SearchFilter />
      </Grid.Column>
      <Grid.Column width={6}>
        <SearchBar />
      </Grid.Column>

      <Grid.Column floated="right" width={2}>
        <Icon name="user" size="large" />
        <Icon name="shopping cart" size="large" />
        <Icon name="box" size="large" />
      </Grid.Column>
    </Grid>
  );
}
