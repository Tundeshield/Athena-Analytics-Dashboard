import React from "react";
import "./WidgetLg.css";
import Button from "../widgetbtn/Button";

const WidgetSm = () => {
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest Transaction</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Customer</th>
					<th className="widgetLgTh">Date</th>
					<th className="widgetLgTh">Amount</th>
					<th className="widgetLgTh">Status</th>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=6&m=656673020&s=612x612&w=0&h=uWvJ5xue1Mn8fj3_UdMYYh7FcGtLmm9UAv5a78yhoF8="
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Thompson</span>
					</td>
					<td className="widgetLgDate">17 Jun 2021</td>
					<td className="widgetLgAmount">$ 122.00</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=6&m=656673020&s=612x612&w=0&h=uWvJ5xue1Mn8fj3_UdMYYh7FcGtLmm9UAv5a78yhoF8="
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Thompson</span>
					</td>
					<td className="widgetLgData">17 Jun 2021</td>
					<td className="widgetLgAmount">$ 122.00</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://p3y6v9e6.stackpathcdn.com/wp-content/uploads/cloudinary/v1472390988/tmyknkyczm43hubskblg.jpg"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Thompson</span>
					</td>
					<td className="widgetLgData">17 Jun 2021</td>
					<td className="widgetLgAmount">$ 122.00</td>
					<td className="widgetLgStatus">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://p3y6v9e6.stackpathcdn.com/wp-content/uploads/cloudinary/v1472390988/tmyknkyczm43hubskblg.jpg"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Thompson</span>
					</td>
					<td className="widgetLgData">17 Jun 2021</td>
					<td className="widgetLgAmount">$ 122.00</td>
					<td className="widgetLgStatus">
						<Button type="Pending" />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetSm;
