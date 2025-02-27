import '../styles/profileIcon.scss'
import React from 'react'

function ProfileIcon(props) {

 const {iconSize, verifiedBorder, image, color} =props;

 function getRandomInt(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
 }

 let randomId = getRandomInt(1, 70);

 let profileImage = image 
 ? image 
 : `https://i.pravatar.cc/150?img=${randomId}`;

 return (
  <div className={verifiedBorder ? 'verifiedBorder' : ''}>
<img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"/>
  <span className="color"></span>
  </div>
 )
}

export default ProfileIcon
