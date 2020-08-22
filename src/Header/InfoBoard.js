import React from 'react';
import data from './Header.json'
import LinkLogo from './LinkLogo'

import GithubLogo from './github_icon.png'
import FacebookLogo from './facebook_icon.png'

// Shows all initial information on portfolio
export default function InfoBoard() {
  return (
    <div className = "InfoBoard">

        <div className = "Name"> {data.Name} </div>
        <div className = "Profession">{data.Profession}</div>
        <div className = "Message">{data.Message}</div>
  
        <div className = "Logos">
          <LinkLogo Link={data.GithubLink} Icon={GithubLogo} />
          <LinkLogo Link={data.FacebookLink} Icon={FacebookLogo} />
        </div>
  
      </div>
    );

}
