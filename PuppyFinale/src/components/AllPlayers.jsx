import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPlayers, deletePlayer } from '../ajaxHelpers.js'; 

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = async () => {
        try {
            const data = await fetchAllPlayers();
            console.log(data); 
            setPlayers(data.data.players || []); 
        } catch (error) {
            console.error('Failed to load players:', error);
        }
    };

    const handleDelete = async (playerId) => {
        try {
            await deletePlayer(playerId); 
        } catch (error) {
            console.error('Failed to delete player:', error);
        }
    };

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search players"
            />
            {filteredPlayers.map(player => (
                <div key={player.id} style={{ margin: '10px 0' }}>
                    <span>{player.name}</span>
                    <Link to={`/player/${player.id}`} style={{ marginLeft: '10px' }}>See Details</Link>
                    <button onClick={() => handleDelete(player.id)} style={{ marginLeft: '10px' }}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AllPlayers;
