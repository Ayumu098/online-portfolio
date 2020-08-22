import React from 'react';

// Component for linking social media contacts when clicked
export default function LinkLogo(props) {
    return (
      <a href={props.Link}>
        <button className = "LinkLogo" style ={ { 
          backgroundImage: "url("+props.Icon+")" } } />
      </a>
    ); 
  }