import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { 
  Header, 
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Background>
          <Header as='h1' textAlign='center' color= 'red'>Red House<br/></Header>
            <Image textAlign='center'src='https://fthmb.tqn.com/h5640eOdlK-rhPQpHnGYT6zHsY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beef-and-vegetable-stir-fry-165955462-5834b0523df78c6f6a6af185.jpg'alt="yummy food" height="30%"  centered/>
              <br/>
            <Header textAlign='center' >
              <Link to='/menus/1'red >Menu</Link>
            </Header>
            <br/>
          <Header as='h2' textAlign='center'>1465 S State St | Open 11:30 to 9:30
              <br/>Closed Tuesdays | Phone: (801) 821-3622</Header>
        </Background>
      </Fragment>




    );
  }
}

const Background = styled.div`
background: slategray;
`

export default Home;
