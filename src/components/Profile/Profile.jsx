import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";
import currentProfile from "./ProfileData";


function Profile() {
	return (
		<section className={s.profile}>
			<div className={s.description}>
				<img className={s.avatar} src={currentProfile.avatar} alt="avatar" />
				<ul className={s.list}>
					<li className={s.item}>{currentProfile.name}</li>
					<li className={s.item}>Date of Birth: {currentProfile.birth}</li>
					<li className={s.item}>City: {currentProfile.city}</li>
					<li className={s.item}>Education: {currentProfile.education}</li>
					<li className={s.item}>Contacts: {currentProfile.contacts}</li>
				</ul>
			</div>
			<Posts />
		</section>
	);
}

export default Profile;