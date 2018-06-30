import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import styled from 'styled-components';
import {setHeaders} from '../reducers/headers'
import PropTypes from 'prop-types';
import Item from './Item';
import { 
  Header, 
   } from 'semantic-ui-react';


class Cart extends Component {
  state = { cart: {} }

  componentDidMount() {
    axios.get(`/api/carts`)
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ cart: res.data })
      } )
  }

  render() {
const { item, } = this.props
    return (
        <Background>
          {/* <Header as='h1' textAlign='center'>Shopping Cart</Header>
          <Header as='h2' textAlign='center'>{item.name}</Header>
          {/* <Header as='h2' textAlign='center'>{item.catagory}</Header> */}
          {/* <Header as='h2' textAlign='center'>${item.price}</Header> */} */}
            
        </Background>
    );
  }
}

  Cart.propTypes = {
    Carts: PropTypes.array,
    total: PropTypes.number,
    removeFromOrderCart: PropTypes.func.isRequired
  }
  const Background = styled.div`
  background: slategray;
  height: 100vh;
  `

export default connect()(Cart)