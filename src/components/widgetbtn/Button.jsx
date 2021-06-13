import React from "react";
import "./Button.css"

const Button = ({ type }) => {
	return <button className={`widgetLgButton ${type}`}>{type}</button>;
};

export default Button;
