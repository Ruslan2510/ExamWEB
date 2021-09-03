import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';
import { Helmet } from "react-helmet"; 

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return ( 
  <AppContainer>
    <Helmet>
      <title>YourCar</title>
      <meta name="description" content="Always choose th best car from our local stores or order it remotely at the best price for you and get the best quality cars for as long as you like" />
      <meta name="keywords" content="Cars, Rent, Sell, Carsharing, Sportcars"/>
    </Helmet>
    <HomePage />
  </AppContainer>
  );
}

export default App;
