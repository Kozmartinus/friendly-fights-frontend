import React from 'react';
import WelcomeContainer from './welcome_text/WelcomeContainer';
import WelcomeTextBox from './welcome_text/WelcomeTextBox';
import UserBox from './user_box/UserBox';

function WelcomeCard() {
  return (
    <WelcomeContainer>
      <WelcomeTextBox>
        <h2>Welcome to Friendly Fights!</h2>
        <p>Time to challenge your friends in your selected games</p>
        <p>Hang out with your gang in a competitive way</p>
        <p>Organize your groups, record and follow your results</p>
        <p>Ready to go? Who will be the champion today?</p>
      </WelcomeTextBox>
      <UserBox />
    </WelcomeContainer>
  );
}

export default WelcomeCard;
