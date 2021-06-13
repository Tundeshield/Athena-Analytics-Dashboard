import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import Profile from "../../utilities/images/tunde.jpeg";
import Logo from "../../utilities/images/Logos.png";
import { IconButton } from "@material-ui/core";

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbar__wrapper">
				<div className="topbar__left">
					<img src={Logo} alt="" />
				</div>
				<div className="topbar__right">
					<IconButton size="small">
						<div className="topbar__right__iconContainer">
							<NotificationsNoneIcon />
							<span className="topIconBadge">2</span>
						</div>
					</IconButton>
					<IconButton size="small">
						<div className="topbar__right__iconContainer">
							<LanguageIcon />
							<span className="topIconBadge">2</span>
						</div>
					</IconButton>
					<IconButton size="small">
						<div className="topbar__right__iconContainer">
							<SettingsIcon />
						</div>
					</IconButton>
					<IconButton size="small">
						<div className="topbar__image">
							<Avatar src={Profile} />
						</div>
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
