import React from 'react';
import './PlayerInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const PlayerInfo = (props) => {
	const addClick = props.addClick
	const { img, name, age, position, salary, jersey } = props.player
	return (
		<div className="playerData">
			<div>
				<img src={img} alt="" />
			</div>

			<div className="infoStyle ">
				<div className="playerInfo ">
					<h1>Name : {name}</h1>
					<h2>position : {position}</h2>
					<h3>salary : {salary}</h3>
					<h4><small>jersey : {jersey}</small></h4>
					<p>age :{age} </p>
				</div>
				<div className="">
					<button className="btnStyle" onClick={() => addClick(props.player)} >
						<FontAwesomeIcon icon={faPlus} /> Add Player</button>
				</div>
			</div>
		</div>
	);
};

export default PlayerInfo;