import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller';



class AllItems extends Component {
  state = { items: [], page: 1 }

  componentDidMount() {
    this.getNextPage()
  }

  getNextPage = () => {
    const {page} = this.state

    axios.get(`/api/page?page=${this.state.page}`)
      .then(res => {
        this.setState({ items: [...this.state.items, res.data], page: page + 1 })
      })
  }

  render() {
    const { items } = this.state
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.getNextPage}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <div>
          <ul>
            {items.map(i =>
              <li key={i.id}>
                <Link to={`/menus/1/items/${i.id}`}> {i.name} </Link>
              </li>
            )}
          </ul>
        </div>
      </InfiniteScroll>
    );
  }
}

export default AllItems
