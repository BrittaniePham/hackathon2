import React, { Component } from 'react';
import axios from 'axios'
import {Header, Button} from 'semantic-ui-react'
import {setHeaders} from '../reducers/headers'
import {connect} from 'react-redux'
 
class AllOrders extends Component {
  state = {orders: []}

  componentDidMount() {
    // this.getOrders()
    axios.get('/api/everything')
    .then(res => {
      this.props.dispatch(setHeaders(res.headers))
      this.setState({ orders: res.data})
    })
  }

  getOrders = () => {

  }

  deleteOrder = (id) => {
    axios.delete(`/api/carts/${id}`)
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.getOrders()
      })
  }

  render() {
    return (
      <div>
        <Header as='h1'>All Orders</Header>
        <ul>
          {this.state.orders.map(o =>
            <li key={o.id}>
              {o.name}
              <Button onClick={this.deleteOrder(o.id)}>Delete Order</Button>
              <hr />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect()(AllOrders);