import React from 'react';
import InfoBoard from './InfoBoard'
import PersonalPicture from './personal_picture.png'
import './Header.css'

export default function Header() {
  return (
    <div className="Header">
        <InfoBoard />
        <img className = "PersonalPicture" src={PersonalPicture} 
        alt="" />
    </div>
  );
}
