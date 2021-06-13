import React from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";

const UserList = () => {
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
						<IconButton size="small">
							<DeleteOutlineIcon style={{ color: "red", cursor: "pointer" }} />
						</IconButton>
					</>
				);
			},
		},
	];

	const rows = [
		{
			id: 1,
			user: "Kamaru usman",
			avatar: "https://pbs.twimg.com/media/CsA2ChGXEAE_CEP.jpg",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 2,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 3,
			user: "Tunde Adepegba",
			avatar: "https://pbs.twimg.com/media/CsA2ChGXEAE_CEP.jpg",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 4,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 5,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 6,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 7,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 8,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 9,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
		{
			id: 10,
			user: "Tunde Adepegba",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONyqUa1BCLMKVtDjHCSNqdJ4qYoxJ6vVjKw&usqp=CAU",
			email: "kamarusman@gmail.com",
			status: "active",
			transaction: "$130.00",
		},
	];
	return (
		<div className="userList">
			<DataGrid
				rows={rows}
				disableSelectionOnClick
				columns={columns}
				pageSize={7}
				checkboxSelection
			/>
		</div>
	);
};

export default UserList;
