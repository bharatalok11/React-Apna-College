import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function LikeButton(){
    let [heart, setHeart] = useState(faHeartRegular);
    let style = { color: "red", cursor: "pointer" ,fontSize : "5rem"};
    let clicked = ()=>{
        setHeart(heart === faHeartRegular ? faHeartSolid : faHeartRegular);
    }
    return(
        <FontAwesomeIcon 
            onClick={clicked} 
            icon={heart} 
            style={style}
        />
    );
}