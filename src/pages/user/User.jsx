import React from "react";
import "./user.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import PhoneIcon from "@material-ui/icons/Phone";

const User = () => {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<button className="userAddButton">Create</button>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://www.thetvfestival.com/wp-content/uploads/2020/08/Yinka-Bokinni.jpg"
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUsername">Anna Becker</span>
							<span className="userShowJob">Backend Engineer</span>
						</div>
					</div>

					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentityIcon className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck123</span>
						</div>
						<div className="userShowInfo">
							<CalendarTodayIcon className="userShowIcon" />
							<span className="userShowInfoTitle">10.12.1990</span>
						</div>
						<div className="userShowInfo">
							<MailOutlineIcon className="userShowIcon" />
							<span className="userShowInfoTitle">+1 123 456 67</span>
						</div>
						<div className="userShowInfo">
							<MailOutlineIcon className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck@gmail.com</span>
						</div>
						<div className="userShowInfo">
							<LocationSearchingIcon className="userShowIcon" />
							<span className="userShowInfoTitle">New York </span>
						</div>
					</div>
				</div>
				<div className="userUpdate"></div>
			</div>
		</div>
	);
};

export default User;
