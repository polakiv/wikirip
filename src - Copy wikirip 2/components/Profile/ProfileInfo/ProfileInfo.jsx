import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props, profile) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <img src={profile.image_remote1 != '' ? profile.image_remote1 : userPhoto} /> 
           
            
            <div className={s.descriptionBlock}>
                
                ava + description2 здесь пока ничего....
            </div>
        </div>
    )
}

export default ProfileInfo;