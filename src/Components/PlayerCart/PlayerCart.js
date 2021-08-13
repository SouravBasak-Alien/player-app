import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./PlayerCart.css"

const PlayerCart = (props) => {
	const Click = props.Click
	let total = 0;
	for (let i = 0;i < Click.length;i++) {
		const player = Click[i];
		total = total + Number(player.salary);

	}
	let salary;
	for (let i = 0;i < Click.length;i++) {
		const playerSalary = Click[i];
		salary = playerSalary.salary;

	}
	return (
		<div>
			<h2>Total Player : {Click.length}</h2>
			<small> Latest Player salary :{salary}</small>
			<h3>Amount :</h3>
			{Click.map(list => <h3 className="list-group-item bg-success">${list.salary}</h3>)}
			<div className="card">
				<div className="card-header">
					<h2>player details : </h2>
				</div>
				<ul className="list-group list-group-flush ">
					{Click.map(list =>
						<h3 className="list-group-item bg-success">Latest Player : {list.name}</h3>)}
				</ul>
			</div>
			<h2><small>Total Amount : {Number(total)}</small></h2>
		</div>
	);
};

export default PlayerCart;