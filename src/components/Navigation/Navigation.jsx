import React from "react";
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

function Navigation() {
	return (
		<aside className={s.navigation}>
			<nav>
				<ul className={s.list}>
					<li className={s.item}>
						<NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink>
					</li>
					<li className={s.item}>
						<NavLink className={s.link} activeClassName={s.active} to="/messages">Messages</NavLink>
					</li>
					<li className={s.item}>
						<NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink>
					</li>
					<li className={s.item}>
						<NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink>
					</li>
					<li className={s.item}>
						<NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Navigation;