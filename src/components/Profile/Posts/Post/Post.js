import React from "react";
import s from "./Post.module.css";

function Post(props) {
    return (
	    <li className={s.item}>{props.message}</li>
	);
}

export default Post;