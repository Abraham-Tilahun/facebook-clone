import React from 'react'
import abrish from './image/abrish.png'
import sunset from './image/sunset.jpeg'
import ab1 from "./image/ab1.jpeg";
import ab2 from "./image/ab2.jpeg";
import ab3 from "./image/ab3.jpeg";
import ab4 from "./image/ab4.jpg";
import './story.css'
import Stories from './Stories'
const Story = () => {
  return (
		<div className="story">
			<Stories image={ab4} profilePic={abrish} title="Abraham" />
			<Stories
				image={sunset}
				profilePic="https://i.imgur.com/Iwio8Br.jpeg"
				title="Solomon"
			/>
			<Stories
				image={ab1}
				profilePic="https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=400"
				title="Samuel"
			/>
			<Stories
				image={ab2}
				profilePic="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				title="Bahriw"
			/>
			<Stories
				image={ab3}
				profilePic="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				title="Haile"
			/>
		</div>
	);
}

export default Story
