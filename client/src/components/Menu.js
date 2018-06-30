import React, { Component } from 'react';
import { Grid, Segment, Header, Card, Divider, Container, Button, Icon } from 'semantic-ui-react'
import Item from './Item'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { setFlash } from '../reducers/flash'
import { setHeaders } from '../reducers//headers';
import { connect } from 'react-redux';


class Menu extends Component {
  state = { items: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus/1/items')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ items: res.data })
      })
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    const { items, showForm } = this.state
    return (
      <Container>
        <Button color='purple'>
          <a href='https://www.instagram.com/phambeee/?hl=en' target='_blank'>
            <Icon name='instagram' /> Instagram
          </a>
        </Button>
        <Button color='red'>
        <a href='https://www.yelp.com/biz/red-house-salt-lake-city' target='_blank'>
          Yelp
        </a>
        </Button>
        <Button color='facebook'>
          <a href='https://www.facebook.com/Red-Moose-Coffee-Company-177157861758/' target='_blank'>
            <Icon name='facebook' /> Facebook
          </a>
        </Button>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Header as='h1' textAlign='center'>Dim Sum</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Dim Sum' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`}>{i.name}</Link>
                   </li>
                )}
              </Segment>
              <Segment>
                <Header as='h1' textAlign='center' >Noodle Soups</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Noodle Soups' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`} >{i.name}</Link>
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
                    <Link to={`/menus/1/items/${i.id}`}>{i.name}</Link>
                   </li>
                )}
              </Segment>
              <Segment>
                <Header as='h1' textAlign='center' >Seafood</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Seafood' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`}>{i.name}</Link>
                   </li>
                )}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h1' textAlign='center' >Hot Pot</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Hot Pot' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`}>{i.name}</Link>
                   </li>
                )}
              </Segment>
              <Segment>
                <Header as='h1' textAlign='center' >Fried Rice</Header>
                <Divider/>
                { items.map (i => 
                   i.category === 'Fried Rice' &&
                   <li key={i.id}>
                    <Link to={`/menus/1/items/${i.id}`}>{i.name}</Link>
                   </li>
                )}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button>CHECKOUT</Button> 
        {/* todo!! */}
        { showForm ?
          //form component here
          <Button onClick={this.toggleForm}>cancel</Button>
        :
          <Button onClick={this.toggleForm}>add item to menu</Button>
        }
      </Container>
    );
  }
}
const Background = styled.div`
background: slategray;
height: 100vh;
`

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Menu);