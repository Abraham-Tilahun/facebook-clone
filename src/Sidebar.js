import React from 'react'
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './sidebar.css'
import abrish from './image/abrish.png'
import SidebarRow from './SidebarRow'
const Sidebar = () => {
  return (
		<div className="sidebar">
			<SidebarRow src={abrish} title="Abraham Tilahun" />
			<SidebarRow
				Icon={LocalHospitalIcon}
				title="Covid-19 Information center"
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleOutlineIcon} title="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
			<SidebarRow Icon={PlayCircleOutlineIcon} title="Vedios" />
			<SidebarRow Icon={ExpandMoreIcon} title="More" />
		</div>
	);
}

export default Sidebar
