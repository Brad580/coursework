
import React, { useState } from 'react';
import { createNewPlayer } from '../ajaxHelpers.js';

const NewPlayerForm = () => {
    const [playerData, setPlayerData] = useState({
        name: '',
        teamName: '',
        ownerName: '',
        breed:'',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlayerData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createNewPlayer(playerData);
            console.log('Player created successfully');
        } catch (error) {
            console.error('Failed to create player:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={playerData.name} onChange={handleChange} placeholder="Name" />
            <input name="teamName" value={playerData.teamName} onChange={handleChange} placeholder="Team Name" />
            <input name="ownerName" value={playerData.ownerName} onChange={handleChange} placeholder="Owner Name" />
            <input name= 'breed' value={playerData.breed} onChange={handleChange} placeholder='breed'/>
            <button type="submit">Create Player</button>
        </form>
    );
};

export default NewPlayerForm;
