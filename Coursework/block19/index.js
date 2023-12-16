const possibleNames = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
const possibleOccupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consultant'];
const freelancers = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateAveragePrice() {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  const averagePrice = freelancers.length > 0 ? totalPrices / freelancers.length : 0;
  return averagePrice.toFixed(2);
}


function renderFreelancers() {
  const freelancersList = document.getElementById('freelancersList');
  freelancersList.innerHTML = '';

  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement('div');
    freelancerDiv.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancersList.appendChild(freelancerDiv);
  });

  const averagePrice = calculateAveragePrice();
  const averagePriceDisplay = document.getElementById('averagePrice');
  averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice}`;
}


function generateRandomFreelancer() {
  const name = possibleNames[getRandomInt(0, possibleNames.length - 1)];
  const occupation = possibleOccupations[getRandomInt(0, possibleOccupations.length - 1)];
  const startingPrice = getRandomInt(30, 100); 

  const newFreelancer = { name, occupation, startingPrice };
  freelancers.push(newFreelancer);

  renderFreelancers();
}


setInterval(generateRandomFreelancer, 5000); 


renderFreelancers();
