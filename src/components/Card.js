import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './Card.css';

import SoundButton from './SoundButton';
import ProgressIcon from './ProgressIcon';
import ComplaintIcon from './ComplaintIcon';
import DeleteIcon from './DeleteIcon';
import DownloadIcon from './DownloadIcon';
import { word } from '../word.js';

class Card extends Component {
  render() {
    return (  
      <Flexbox height="100vh" alignItems="center" justifyContent="center" >
        <button className="leftLeafButton">previous</button>
        <div className="container">
          <div className="general">
            <div className="forPicture">              
              <img src={word[0].pict} alt="place for pic" />{/*reusable with different sizes (states)*/}
              <div className="icons">
                <div className="progress">
                  <ProgressIcon />
                </div>
                <div className="complaint">
                  <ComplaintIcon />
                </div>{/*resuable without states*/}
                <div className="downloadOwnImage">
                  <DownloadIcon />
                </div>{/*resuable without states*/}
                <div className="trash">
                  <DeleteIcon />
                </div>{/*resuable with different states*/}
              </div>
            </div>
            <div className="forWord">
              <div className="main">{ word[0].english }</div>
              <div className="transcription">
              <SoundButton />
               {/* <div className="sound">sound button</div>{/*resuable without states} */}
                <p className="text">{ word[0].transcription }</p>{/*resuable without states*/}
              </div>
              <div className="forTranslate">
                <div className="text">{ word[0].translate }</div>{/*resuable without states*/}
                <div className="addTranslate">button for adding other translation</div>{/*resuable with different states*/}
              </div>                  
            </div>
            
          
          </div>
          <div className="forPhrase">
             <SoundButton />
            <div className="text"><i>{word[0].example}</i></div>
            <div className="reload">next phrase</div>
          </div>
          <div className="synonyms">
            <div className="title">synonyms:</div>
            <div className="eachOneSyn">
              <SoundButton />
              {/*eslint-disable-next-line*/ /*needs to be changed by styled button*/}
              <div className="text"><a href="#">synonym itself</a></div>
            </div>
          </div>
        </div>
        <button className="leftLeafButton">next</button>
      </Flexbox>    
    )
    
  }
}

export default Card;