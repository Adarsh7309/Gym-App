export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '1c7ef48375msha7921ecc86fe01fp1e0e9fjsn965544144977'
  },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1c7ef48375msha7921ecc86fe01fp1e0e9fjsn965544144977',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url,options) =>{
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};