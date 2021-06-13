import "./Chart.css";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className="chart">
			<h3 className="chartTitle">
				{title}
				<ResponsiveContainer width="100%" aspect={4 / 1}>
					<LineChart data={data}>
						<XAxis dataKey="name" stroke="" />
						<Line type="monotone" dataKey={dataKey} />
						<Tooltip />
						{grid && <CartesianGrid stroke="#e0dfdf" strokeDashArray="5 5" />}
					</LineChart>
				</ResponsiveContainer>
			</h3>
		</div>
	);
};

export default Chart;
