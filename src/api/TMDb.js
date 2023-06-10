import axios from "axios";



export async function FetchMovies() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=434f47eb1b2d5c6b864a3d2591bf1b1d"
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzRmNDdlYjFiMmQ1YzZiODY0YTNkMjU5MWJmMWIxZCIsInN1YiI6IjY0ODNmODRhZTM3NWMwMDBlMjRmMDMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iCcgQOMRqU4nhAiM3zFYXp9PNXOnOXG1AQfUaV5uUS8'
        }
    };
    return axios.get(url,options);
}

export async function FetchGenres(){
    const url2 = "https://api.themoviedb.org/3/genre/movie/list?api_key=434f47eb1b2d5c6b864a3d2591bf1b1d&"
    const options2 = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzRmNDdlYjFiMmQ1YzZiODY0YTNkMjU5MWJmMWIxZCIsInN1YiI6IjY0ODNmODRhZTM3NWMwMDBlMjRmMDMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iCcgQOMRqU4nhAiM3zFYXp9PNXOnOXG1AQfUaV5uUS8'
        }
      };
    return axios.get(url2, options2);
}
    

