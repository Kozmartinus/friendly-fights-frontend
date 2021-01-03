import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import WelcomeTextBox from './welcome_text/WelcomeTextBox';
import WelcomeText from './welcome_text/WelcomeText';
import UserBox from './user_box/UserBox';

function WelcomeCard() {
  return (
    <WelcomeContainer>
      <WelcomeTextBox>
        <WelcomeText />
      </WelcomeTextBox>
      <UserBox />
    </WelcomeContainer>
  );
}

export default WelcomeCard;
