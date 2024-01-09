import React from 'react'

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));

  
  const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a6b2f25e9bmsh89365fc0918f18fp111e97jsn0c10303bba8d',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
console.log(main_data.jawSummary)


  return (
    <div>Movie</div>
  );
};

export default Movie