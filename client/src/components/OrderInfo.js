import {Component} from 'react';
import axios from 'axios';
import Cart from './cart';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class OrderInfo extends Component {
  state = { cart: {} }
  componentDidMount() {
    axios.get(`/api/carts/`)
      .then( res => {
       this.props.dispatch(setHeaders(res.headers))
       this.setState({ cart: res.data })
    })
  }
  render() {
    const cart = this.state
    return (
      <div>
        <h1> Your order is confirmed!</h1>
        <h3>{ items.map (i => 
          <li key={i.id}>
          <Link to={`/menus/1/items/${i.id}`}>{i.name}</Link>
          </li>
          )} 
        </h3>
        <h3>${ this.state.total.map }</h3>
      </div>
    );
  }
}
export default OrderInfo;