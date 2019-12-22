import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

import { Map, Marker, MarkerLayout } from 'yandex-map-react';
 
import { makeStyles } from '@material-ui/core/styles';  
import Grid from '@material-ui/core/Grid'; 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }, 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    }, 
}));

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  
  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <Grid className='descriptionBlocks'>
      <Grid className={s.descriptionBlock}>
        <img src={profile.photos || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </Grid>
    </Grid>
  )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
 var profilempn = profile.mpn;
 let profilempna = profile.mpn.split(',')[0];
 let profilempnb = profile.mpn.split(',')[1];
 //if (isNaN(profilempna)) {
  //if input is not a number then here
  //alert('It is not a Number');
//} else {
  //if input is number then here
 // alert('It is a Number');
//}
  return <Grid className='mainDetail'>
    {isOwner && <Grid><button onClick={goToEditMode}>edit</button></Grid>}
    <Grid className='mainDetailname'>
      {profile.fullName}
    </Grid>
    <Grid className='mainDetailgps'>
      Местоположение GPS может быть приблизительным до 10 метров: {profile.mpn} (нажмите на кнопку как добраться)
      <br></br>
      {/*profilempna}  {profilempnb*/}
      <br></br>
      <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[profilempna, profilempnb]} zoom={17}>
			<Marker lat={profilempna} lon={profilempnb}>
				<MarkerLayout>
					<Grid className='mainmark'>
						<img src="https://wikirip.site/image/mark.png"/>
						<Grid className='mainmarkfullName'>
							 {profile.fullName}  
						</Grid>
					</Grid>
				</MarkerLayout>
			</Marker>
		</Map>
    </Grid>
  </Grid>
}


const Contact = ({ contactTitle, contactValue }) => {
  //   return <Grid className={s.contact}><b>{contactTitle}</b>: {contactValue}</Grid>
}

	//debugger; 

export default ProfileInfo;