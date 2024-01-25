
const fetchPlayerDetails = async (playerId) => {
    try {
        const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-brad/players/${playerId}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching player details:', error);
        throw error; 
    }
};

export { fetchPlayerDetails };
