import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import { rows } from "../../data";
import { Link } from "react-router-dom";

const UserList = () => {
	const [data, setData] = useState(rows);

	const handleDelete = (id) => {
		const filteredList = data.filter((item) => item.id !== id);
		return setData(filteredList);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => {
				return (
					<div style={{ display: "flex", alignItems: "center" }}>
						<img
							src={params.row.avatar}
							style={{
								width: 32,
								height: 32,
								borderRadius: "50%",
								objectFit: "cover",
								marginRight: 10,
							}}
							alt={params.row.user}
						/>
						{params.row.user}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "status",
			width: 120,
		},

		{
			field: "transaction",
			headerName: "Transaction Volume",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/user/${params.row.id}`}>
							<button
								style={{
									border: "none",
									borderRadius: 10,
									padding: "5 10",
									backgroundColor: "#3bb077",
									color: "white",
									cursor: "pointer",
									marginRight: 20,
								}}
							>
								Edit
							</button>
						</Link>

						<IconButton size="small">
							<DeleteOutlineIcon
								style={{ color: "red", cursor: "pointer" }}
								onClick={() => handleDelete(params.row.id)}
							/>
						</IconButton>
					</>
				);
			},
		},
	];

	return (
		<div className="userList">
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={7}
				checkboxSelection
			/>
		</div>
	);
};

export default UserList;
