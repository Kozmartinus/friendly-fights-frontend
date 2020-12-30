import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import WelcomeTextBox from './WelcomeTextBox';

function WelcomeCard() {
  return (
    <WelcomeContainer>
      <WelcomeTextBox>
        <h2>Welcome to Friendly Fights!</h2>
      </WelcomeTextBox>
    </WelcomeContainer>
  );
}

export default WelcomeCard;
