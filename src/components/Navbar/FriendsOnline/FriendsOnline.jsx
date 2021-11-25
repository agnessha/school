import React from "react";
import s from './FriendsOnline.module.css';
import {NavLink} from "react-router-dom";


const Friends__item = (props) => {
    return (
      <div>
          {props.name}
      </div>
    );
}
const FriendsOnline = (props) => {
    let friendsNewData = props.friendsData.map(friend => (
        <Friends__item name={friend.name}/>
    ))
    return (
        <div className={s.friends}>
            <div className={s.friends__title}>
                Friends:
                {friendsNewData}
            </div>
        </div>
    );
}

export default FriendsOnline;