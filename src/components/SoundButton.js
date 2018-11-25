import React, { Component } from 'react';
import './SoundButton.css';
import audioLogo from '../icons/audioLogo.png';

class SoundButton extends Component {
	render() {
    return (
      <div>
        <button><img src={audioLogo} height="18" width="18" alt="sound" /></button>
      </div>
    )
  }
}

export default SoundButton;