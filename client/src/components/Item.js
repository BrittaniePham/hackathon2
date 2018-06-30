import React, { Component } from 'react';
import axios from 'axios';
import {setHeaders} from '../reducers/headers'
import {connect} from 'react-redux'

class Item extends Component {

  state = { item: {} }

  componentDidMount() {
    axios.get(`api/menus/1/items/${this.props.match.params.id}`)
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ item: res.data })
      } )
  }

  render() {
    const { item } = this.state
    return (
      <div>
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
        <h3>${item.price}</h3>
      </div>
    );
  }
}

export default connect()(Item);






