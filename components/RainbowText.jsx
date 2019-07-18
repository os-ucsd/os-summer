import React from 'react';

export default (props)=>{
  return (<span className="rainbow-text"><style jsx>{`
    .rainbow-text {
      background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;  
    }
    `}</style>{props.children}</span>)
}