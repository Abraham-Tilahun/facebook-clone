import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from 'react'
import './post.css'
const Post = ({profilePic, image, username, timestamp, message}) => {
  return (
		<div className="post">
			<div className="post_top">
				<Avatar src={profilePic} className="post_avatar" />
				<div className="post_topInfo">
					<h3>{username}</h3>
					<p>Time stamp...</p>
				</div>
			</div>
			<div className="post_bottom">
				<p>{message}</p>
			</div>
			<div className="post_image">
				<img src={image} alt=" " />
			</div>
			<div className="post_options">
				<div className="post_option">
					<ThumbUpOutlinedIcon />
					<p>Like</p>
				</div>
				<div className="post_option">
					<ChatBubbleOutlineOutlinedIcon />
					<p>Comment</p>
				</div>

				<div className="post_option">
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className="post_option">
					<AccountCircleIcon />
					<ExpandMoreIcon />
				</div>
			</div>
		</div>
	);
}

export default Post
