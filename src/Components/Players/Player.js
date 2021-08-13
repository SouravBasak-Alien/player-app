import React, { useEffect, useState } from 'react';
import './Player.css'
import Data from '../../PlayerData.json'
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import PlayerCart from '../PlayerCart/PlayerCart';

const Player = () => {
	const [player, setPlayer] = useState([]);
	useEffect(() => {
		setPlayer(Data)
	}, [])
	const [Click, setClick] = useState([])
	const addClick = (addPlayer) => {
		const newPlayer = [...Click, addPlayer]
		setClick(newPlayer)
	}
	return (
		<div className="playerBody">
			<div className="plyerInfo">
				{player.map((player, index) => <PlayerInfo key={index} player={player} addClick={addClick} ></PlayerInfo>)}
			</div>
			<div className="selectPlayer">
				<PlayerCart Click={Click} ></PlayerCart>
			</div>
		</div>
	);
};

export default Player;