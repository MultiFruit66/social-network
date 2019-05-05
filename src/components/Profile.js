import React from 'react';

function Profile() {
  return (
		<section className = "profile">
			<div className="description">
				<img className = "description__avatar" src="https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200" alt="avatar"/>
				<ul className="description__list">
					<li className="description__item">Pavel Maxuta</li>
					<li className="description__item">Date of Birth: 19 November</li>
					<li className="description__item">City: Chisinau</li>
					<li className="description__item">Education: ASEM</li>
					<li className="description__item">Contacts: MaxutaPavel@gmail.com</li>
				</ul>
			</div>
			<div className="posts">
				<p className = "posts__title">My posts</p>
				<textarea name="post" className = "posts__textarea" cols="100" rows="3" placeholder="your news..." ></textarea>
				<div className="posts__button">Send</div>
				<ul className="posts__list">
					<li className="posts__item">Hey, why nobody love me?</li>
					<li className="posts__item">It's our new program! Hey</li>
				</ul>
			</div>
		</section>
  );
}

export default Profile;