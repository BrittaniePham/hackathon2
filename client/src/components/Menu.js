import React, { Component } from 'react';
import { Grid, Segment, Header, Card, Divider } from 'semantic-ui-react'
import Item from './Item'
import axios from 'axios'

class Menu extends Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/menus/:id/items')
      .then( res => {
        this.setState({ items: res.data })
      })
  }

  render() {
    return (
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header as='h1' textAlign='center' >Dim Sum</Header>
              <Divider/>
            </Segment>
            <Segment>
              <Header as='h1' textAlign='center' >Noodle Soups</Header>
              <Divider/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as='h1' textAlign='center' >Stir Fry</Header>
              <Divider/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as='h1' textAlign='center' >Seafood</Header>
              <Divider/>
            </Segment>
            <Segment>
              <Header as='h1' textAlign='center' >Hot Pot</Header>
              <Divider/>
            </Segment>
            <Segment>
              <Header as='h1' textAlign='center' >Fried Rice</Header>
              <Divider/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Menu;