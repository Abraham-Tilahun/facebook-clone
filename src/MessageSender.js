import { Avatar } from '@mui/material'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useState } from 'react';
import React from 'react'
import './messageSender.css'

const MessageSender = () => {
	const [input, setInput] = useState(" ");
	const [imgUrl, setImagUrl] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput("");
		setImagUrl("");
	};

  return (
		<div className="messageSender">
			<div className="messageSender_top">
				<Avatar />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="messageSender_input"
						placeholder={"What is in your mind?"}
					/>
				  <input
					  value={imgUrl}
					  onChange = {(e) => setImagUrl(e.target.value)}
					  placeholder={"Image URL (optional)"} />
					<button input type="Submit" onClick={handleSubmit}>
						Hidden submit{" "}
					</button>
				</form>
			</div>
			<div div className="messageSender_bottom">
				<div className="messaSender_option">
					<PlayCircleFilledWhiteOutlinedIcon style={{ color: "red" }} />
					<h3>Live vedio</h3>
				</div>
				<div className="messaSender_option">
					<PhotoLibraryOutlinedIcon style={{ color: "green" }} />
					<h3>Photo/vedio</h3>
				</div>
				<div className="messaSender_option">
					<EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender
