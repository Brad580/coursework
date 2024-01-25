// src/components/SinglePlayer.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlayerDetails } from '../ajaxHelpers.js';

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const getPlayerData = async () => {
            try {
                const data = await fetchPlayerDetails(id);
                setPlayer(data); 
            } catch (error) {
                console.error('Error fetching player:', error);
            }
        };

        getPlayerData();
    }, [id]);

    if (!player) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{player.name}</h2>
            {/* Add more details here */}
            <Link to="/">Back to All Players</Link>
        </div>
    );
};

export default SinglePlayer;
