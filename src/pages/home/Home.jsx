import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import "./Home.css";
import { data } from "../../data.js";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart data={data} title="User Analytics" dataKey="Active User" />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
