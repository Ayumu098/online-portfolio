import React from 'react';

export default function SkillBoard(props) {
  return(
      <div className = "SkillBoard">
        <div className = "Overlay">
            <div className = "Icon" style = {
              {backgroundImage:"url("+props.Icon+")" }}/>
            <div className = "Type">{props.Type}</div>
        </div>

        <div className = "Message">{props.Message}</div>
      </div>
  );
  
}
