import React from 'react';
import SkillBoard from './SkillBoard'
import Data from './SkillList.json'
import './SkillList.css'

import DevelopIcon from './develop-icon.png'
import DesignIcon from './design-icon.png'
import WriteIcon from './write-icon.png'

export default function SkillList() {
  return (
      <div className = "SkillList">
        <SkillBoard Type = {"WRITE"} 
        Icon={WriteIcon} Message={Data.WriteMessage} />
        <SkillBoard Type = {"DESIGN"} 
        Icon={DesignIcon} Message={Data.DesignMessage} />
        <SkillBoard Type = {"DEVELOP"} 
        Icon={DevelopIcon} Message={Data.DevelopMessage} />
      </div>
  );
}
