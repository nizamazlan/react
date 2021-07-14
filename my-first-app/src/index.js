import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading.jsx";


const fname = "Nizam";
const lname = "Azlan";
const year = (new Date().getFullYear());

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

    <Heading/>

  </div>,
document.getElementById('root')
);
