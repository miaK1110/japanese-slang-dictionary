export const config = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c80b2ef5ddmsh65e9187bef13d1bp1b2fc4jsnfb8ce9302a0b',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
  },
};

fetch('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', config)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
