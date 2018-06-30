import React, { Component } from 'react';
import styled from 'styled-components';
import { 
  Header, 
  Image,
   } from 'semantic-ui-react';


class Home extends Component {
  render() {
    return (
      <Background>
        <Header as='h1' textAlign='center'>Red House<br/></Header>
          <Image textAlign='center'src='http://www.redhouseslc.com/pics/food1.jpg'alt="yummy food" height="450px;"  centered/>
          <br/>
      </Background>





    );
  }
}

const Background = styled.div`
background: slategray;
`

export default Home;
