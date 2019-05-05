import React from 'react';

function Navigation() {
  return (
		<section className = "navigation">
			<ul className = "navigation__list">
				<li className = "navigation__item">
					<a className = "navigation__link" href="#a">Profile</a>
				</li>
				<li className = "navigation__item">
					<a className = "navigation__link" href="#a">Messages</a>
				</li>
				<li className = "navigation__item">
					<a className = "navigation__link" href="#a">News</a>
				</li>
				<li className = "navigation__item">
					<a className = "navigation__link" href="#a">Music</a>
				</li>
				<li className = "navigation__item">
					<a className = "navigation__link" href="#a">Settings</a>
				</li>
			</ul>
		</section>
  );
}

export default Navigation;