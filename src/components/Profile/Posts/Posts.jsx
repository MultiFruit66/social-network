import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import currentProfile from "../ProfileData";


let messagesData = [
	{
		id: 1,
		message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id: 2,
		message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id: 3,
		message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
]

let messages = messagesData.map(item => <Post message={item.message} img={currentProfile.avatar}/>);

function Posts() {

	return (
		<div className={s.posts}>
			<p className={s.title}>My posts</p>
			<textarea name="post" className={s.textarea} cols="100" rows="3" placeholder="your news..." ></textarea>
			<div className={s.button}>Send</div>
			<ul className={s.list}>
				{messages}
			</ul>
		</div>
	);
}

export default Posts;