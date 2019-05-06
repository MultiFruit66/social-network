import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";


function Posts() {
  return (
  	<div className={s.posts}>
			<p className={s.title}>My posts</p>
			<textarea name="post" className={s.textarea} cols="100" rows="3" placeholder="your news..." ></textarea>
			<div className={s.button}>Send</div>
			<ul className={s.list}>
				<Post message="Hey, why nobody love me?"/>
				<Post message="It's our new program! Hey"/>
			</ul>
		</div>
	);
}

export default Posts;