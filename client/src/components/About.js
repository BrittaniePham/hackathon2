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
          <Header as='h1' textAlign='center' color='red'>Red House<br/><Header as='h2' textAlign='center'>Here's a Bit About Us</Header></Header>
          <Header as='h2'textAlign='center'>Authentic Sichuan and Chongqing style food</Header>
            <Image textAlign='center'src='http://images.lacarmina.com/151108-hello-kitty-chinese-cuisine-hong-kong-dim-sum-sanrio-6.jpg'alt="yummy food" height="450px;"  centered/>
            <br/>
            <Header as='h2' textAlign='center'>1465 S State St | Open 11:30 to 9:30
              <br/>Closed Tuesdays | Phone: (801) 821-3622</Header>
        </Background>
  
  
  
  
  
      );
    }
  }
  
  const Background = styled.div`
  background: slategray;
  `
  
  export default Home;