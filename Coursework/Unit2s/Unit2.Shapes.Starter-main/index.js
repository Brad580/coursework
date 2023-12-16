class Numbers {
  constructor(data) {
    this.data = data || [];
    this.intervalId = null; // To store the interval ID

    this.ul = document.createElement("ul");
    this.ul.id = "numberList";
    document.body.appendChild(this.ul);
  }

  startGeneratingRandomNumbers(interval) {
    this.intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
      this.data.push(randomNumber);
      console.log(`Generated random number: ${randomNumber}`);
      this.printNumbers();
    }, interval);
  }

  stopGeneratingRandomNumbers() {
    clearInterval(this.intervalId);
    console.log('Stopped generating random numbers.');
  }

  count() {
    return this.data.length;
  }

  printNumbers() {
    this.ul.innerHTML = ''; // Clear existing content

    this.data.forEach((number, index) => {
      const li = document.createElement("li");
      li.textContent = `Unordered List ${index}: ${number}`;
      this.ul.appendChild(li);
    });
  }

}

const numbers = new Numbers();

numbers.startGeneratingRandomNumbers(2000);

setTimeout(() => {
  numbers.stopGeneratingRandomNumbers();
}, 10000); // Stop after 10 seconds (adjust as needed)
