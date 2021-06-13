import React from "react";
import "./Sidebar.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TimelineIcon from "@material-ui/icons/Timeline";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import BarChartIcon from "@material-ui/icons/BarChart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ReportIcon from "@material-ui/icons/Report";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyleIcon className="sidebarIcon" />
							Home
						</li>
						<li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUpIcon className="sidebarIcon" />
							Sales
						</li>
					</ul>
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<PermIdentityIcon className="sidebarIcon" />
							Users
						</li>
						<li className="sidebarListItem">
							<StorefrontIcon className="sidebarIcon" />
							Products
						</li>
						<li className="sidebarListItem">
							<CreditCardIcon className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<BarChartIcon className="sidebarIcon" />
							Reports
						</li>
					</ul>
					<h3 className="sidebarTitle">Notification</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutlineIcon className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<DynamicFeedIcon className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutlineIcon className="sidebarIcon" />
							Messages
						</li>
					</ul>
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<WorkOutlineIcon className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<ReportIcon className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
