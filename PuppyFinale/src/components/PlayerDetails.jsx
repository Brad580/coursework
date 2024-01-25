import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerDetails } from '../ajaxHelpers.js';

const generateRandomOwnerName = () => {
   
    const ownerNames = ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis"];
    const randomIndex = Math.floor(Math.random() * ownerNames.length);
    return ownerNames[randomIndex];
};

const generateRandomTeamName = () => {
    
    const teamNames = ["Team A", "Team B", "Team C", "Team D"];
    const randomIndex = Math.floor(Math.random() * teamNames.length);
    return teamNames[randomIndex];
};

const PlayerDetails = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPlayerDetails(id);

                const randomOwnerName = generateRandomOwnerName();
                const randomTeamName = generateRandomTeamName();

                const modifiedPlayer = {
                    ...data,
                    ownerName: randomOwnerName,
                    teamName: randomTeamName,
                };

                setPlayer(modifiedPlayer);
            } catch (error) {
                console.error('Failed to load player details:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!player) return <div>Loading player details...</div>;

    return (
        <div>
            <h2>{player.name}</h2>
            <p>Team: {player.teamName}</p>
            <p>Owner: {player.ownerName}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default PlayerDetails;
