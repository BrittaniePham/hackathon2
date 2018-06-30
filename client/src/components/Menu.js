import React, { Component } from 'react';
import { Grid, Segment, Header, Card, Divider, Container } from 'semantic-ui-react'
import Item from './Item'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Menu extends Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/menus/1/items')
      .then( res => {
        this.setState({ items: res.data })
      })
  }

  render() {
    const { items } = this.state
    return (
      <Container>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Header as='h1' textAlign='center'>Dim Sum</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Dim Sum' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} />
                   </li>
                )}
              </Segment>
              <Segment>
                <Header as='h1' textAlign='center' >Noodle Soups</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Noodle Soups' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} />
                   </li>
                )}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h1' textAlign='center' >Stir Fry</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Stir Fry' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} />
                   </li>
                )}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h1' textAlign='center' >Seafood</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Seafood' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} />
                   </li>
                )}
              </Segment>
              <Segment>
                <Header as='h1' textAlign='center' >Hot Pot</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Hot Pot' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} />
                   </li>
                )}
              </Segment>
              <Segment>
                <Header as='h1' textAlign='center' >Fried Rice</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Fried Rice' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} />
                   </li>
                )}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Menu;