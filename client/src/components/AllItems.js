import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'



class AllItems extends Component {
  state = { items: [], page: 1 }

  componentDidMount() {
    this.getNextPage()
  }

  getNextPage = () => {
    const {page} = this.state

    axios.get(`/api/page?page=${page}`)
      .then(res => {
        this.setState({ items: res.data, page: page + 1 })
      })
  }

  getPreviousPage = () => {
    const {page} = this.state
    axios.get(`/api/page?page=${page}`)
      .then(res => {
        this.setState({ items: res.data, page: page - 1 })
      })
  }

  render() {
    const { items } = this.state
    return (
        <div>
          <ul>
            {items.map(i =>
              <li key={i.id}>
                <Link to={`/menus/1/items/${i.id}`}> {i.name} </Link>
                <p>Item Viewed: {i.view}</p>
                <p>Item Purchased: {i.purchase}</p>
                <hr />
              </li>
            )}
          </ul>
          <Button onClick={this.getPreviousPage}>Previous Page</Button>
          <Button onClick={this.getNextPage}>Next Page</Button>

        </div>
    );
  }
}

export default AllItems
