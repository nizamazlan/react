import React from 'react';

function Heading(){

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

  return(
    <div>
      <h1 className="heading1" style={customStyle}> {greetings}</h1>
      <h2>{time}</h2>
    </div>
  );

}

export default Heading;
