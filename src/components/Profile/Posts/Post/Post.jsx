import React from "react";
import s from "./Post.module.css";

function Post(props) {
    return (
	    <li className={s.item}>
			<img className={s.image} src={props.img} alt="avatar"></img>
			<div className={s.message}>{props.message}</div>
		</li>
	);
}

export default Post;