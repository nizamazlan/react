import React from 'react';
import ReactDOM from 'react-dom';


const fname = "Nizam";
const lname = "Azlan";
const year = (new Date().getFullYear());
const time = new Date().getHours();
let greetings;

const customStyle = {
  color: ""
}

if (time < 12){
  greetings = "Good Morning";
  customStyle.color = "blue";
} else if (time < 18) {
  greetings = "Good Evening";
  customStyle.color = "green";
} else {
  greetings = "Good Night";
  customStyle.color = "yellow";
}

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">Hello {`${fname} ${lname}`}</h1>
    <p>This is a paragraph. Created by {fname}</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <p>This is a second paragraph. Copyright {year}</p>

    <div>
      <img alt="1" src="https://picsum.photos/200/400"/>
      <img alt="1" src="https://picsum.photos/200"/>
      <img alt="1" src="https://picsum.photos/200"/>
    </div>

    <div>
      <h1 className="heading1" style={customStyle}> {greetings} </h1>
      <h2>{time}</h2>
    </div>

  </div>,
document.getElementById('root'));
