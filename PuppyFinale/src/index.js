// /src/API/index.js

export async function fetchAllPlayers() {
    try {
      const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-brad/players`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching all players:', error);
    }
  }
  