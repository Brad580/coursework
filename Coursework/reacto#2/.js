async function getData() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const getData = await response.json();
    console.log(getData);
  }
  getData()