import React, {useRef} from "react";
import { Icon, Grid, Menu, Sticky, Container, Ref } from "semantic-ui-react";
import SearchFilter from "./SearchFilter";
import SearchBar from "./SearchBar";
import { Navigate, useNavigate } from "react-router-dom";

export default function NavBar() {
const navigate = useNavigate();

const handleHomeClick = () => {
  navigate('/')
}

  return (
    
      <Container className="nav-container" style={{ margin: -2, padding: 25, width: '100%' }}>
    <Grid relaxed columns="equal">
      <Grid.Column floated="left" width={1}>
        <h2 onClick={handleHomeClick} style={{cursor:'pointer'}} href="/" id="store-title">StoreDemo</h2>
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
    </Container>
    
   
  );
}
