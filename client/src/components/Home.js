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
          <Header as='h1' textAlign='center'>Red House<br/></Header>
            <Image textAlign='center'src='http://www.redhouseslc.com/pics/food1.jpg'alt="yummy food" height="450px;"  centered/>
            <br/>
        </Background>
      <Link to='/menus/1'>Menu</Link>
      </Fragment>


    );
  }
}

const Background = styled.div`
background: slategray;
`

export default Home;
