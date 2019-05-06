import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts.js";

function Profile() {
  return (
		<section className={s.profile}>
			<div className={s.description}>
				<img className={s.avatar} src="https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200" alt="avatar"/>
				<ul className={s.list}>
					<li className={s.item}>Pavel Maxuta</li>
					<li className={s.item}>Date of Birth: 19 November</li>
					<li className={s.item}>City: Chisinau</li>
					<li className={s.item}>Education: ASEM</li>
					<li className={s.item}>Contacts: MaxutaPavel@gmail.com</li>
				</ul>
			</div>
			<Posts />
		</section>
  );
}

export default Profile;