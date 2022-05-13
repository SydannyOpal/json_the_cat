const request = require('request');
const breedName =  process.argv[2];

const breedFetcher = (name) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + name,
    function(error, response, body) {
      if (error) {
        console.log("error:", error);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Breed not found");
        return;
      }
    
    });
};
breedFetcher(breedName);
// console.log(breedName);