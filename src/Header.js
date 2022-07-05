import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './header.css'
import logo from './image/facebook.png'
import { Avatar, IconButton } from '@mui/material';
const Header = () => {
  return (
		<div className="header">
			<div className="header_left">
				<img src={logo} alt="Facebook logo" />
				<div className="header_input">
					<SearchIcon />
					<input type="text" placeholder='search facebook'/>
				</div>
			</div>
			<div className="header_middle">
				<div className="header_options header_options--active">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header_options">
					<FlagIcon fontSize="large" />
				</div>
				<div className="header_options">
					<SubscriptionsOutlinedIcon fontSize="large" />
				</div>
				<div className="header_options">
					<StorefrontOutlinedIcon fontSize="large" />
				</div>
				<div className="header_options">
					<SupervisedUserCircleRoundedIcon fontSize="large" />
				</div>
			</div>
			<div className="header_right">
				<div className="header_info">
					<Avatar />
					<h4>Abraham</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<DynamicFormIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header
