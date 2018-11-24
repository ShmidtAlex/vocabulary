import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './Card.css';
class Card extends Component {
  render() {
    return (  
      <Flexbox height="100vh" alignItems="center" justifyContent="center" >
        <button className="leftLeafButton">previous</button>
        <div className="container">
          <div className="general">
            <div className="forPicture">              
              <img alt="place for pic" />{/*reusable with different sizes (states)*/}
              <div className="icons">
                <div className="progress"></div>{/*resuable with different states*/}
                <div className="complaint"></div>{/*resuable without states*/}
                <div className="downloadOwnImage"></div>{/*resuable without states*/}
                <div className="trash"></div>{/*resuable with different states*/}
              </div>
            </div>
            <div className="forWord">
              <div className="main">word itself</div>{/*resuable without states*/}
              <div className="transcription">
                <div className="sound">sound button</div>{/*resuable without states*/}
                <p className="text">transcription in letters</p>{/*resuable without states*/}
              </div>
              <div className="forTranslate">
                <div className="text">translation</div>{/*resuable without states*/}
                <div className="addTranslate">button for adding other translation</div>{/*resuable with different states*/}
              </div>                  
            </div>
            
          
          </div>
          <div className="forPhrase">
            <div className="sound">sound</div>
            <div className="text">phrase with exploring word</div>
            <div className="reload">next phrase</div>
          </div>
          <div className="synonyms">
            <div className="title">synonyms:</div>
            <div className="eachOneSyn">
              <div className="sound">sound</div>
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