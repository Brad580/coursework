const fetchPlayerDetails = async (playerId) => {
    const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-brad/players/${playerId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(`Error fetching player details for player ID ${playerId}:`, error);
        throw error;
    }
};

export const deletePlayer = async (playerId) => {
    const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-brad/players/${playerId}`;
    try {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Player deleted successfully');
    } catch (error) {
        console.error('Error deleting player:', error);
        throw error;
    }
};

const fetchAllPlayers = async () => {
    const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-brad/players';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching all players:', error);
        throw error;
    }
};


const createNewPlayer = async (playerData) => {
    const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-brad/players';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playerData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new player:', error);
        throw error;
    }
};

export { fetchAllPlayers, createNewPlayer, fetchPlayerDetails };