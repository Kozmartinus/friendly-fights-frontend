import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import WelcomeBox from './welcome_box/WelcomeBox';
import UserBox from './user_box/UserBox';

function WelcomeCard() {
  return (
    <WelcomeContainer>
      <WelcomeBox />
      <UserBox />
    </WelcomeContainer>
  );
}

export default WelcomeCard;
