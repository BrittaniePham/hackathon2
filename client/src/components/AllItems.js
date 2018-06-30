import React, { Component } from 'react';



class AllItems extends Component {
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
      <div>
        <ul>
          {items.map(i =>
            <li key={i.id}>
              <Link to={`/menus/1/items/${i.id}`}> {i.name} </Link>
            </li>
          )}
        </ul>
      </div>
        );
      }
    }
    
    export default AllItems
