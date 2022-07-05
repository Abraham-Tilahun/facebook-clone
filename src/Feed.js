import React from 'react'
import Story from './Story'
import MessageSender from "./MessageSender";
import Post from './Post';
import abrish from './image/abrish.png'
import fa from './image/fa.jpg'
import './feed.css'
const Feed = () => {
  return (
		<div className="feed">
			<Story />
			<MessageSender />
			<Post
				profilePic={abrish }
				message="wow it works"
				timestamp="This is time stamp"
				username="Abraham"
				image={fa}
			/>
			<Post
				profilePic={abrish}
				message="wow it works"
				timestamp="This is time stamp"
				username="Abraham"
				image={fa}
			/>
			<Post
				profilePic={abrish}
				message="wow it works"
				timestamp="This is time stamp"
				username="Abraham"
				image={fa}
			/>
		</div>
	);
}

export default Feed
