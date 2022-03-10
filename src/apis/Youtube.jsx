// Imports Axios to make an API call.
import Axios from 'axios';

/*
This is my API key to use Youtube Data v3 API.
To keep my API key secret, it is attached to a variable (REACT_APP_API_KEY) in a .env file which is ignored by git.
*/
const API_KEY = process.env.REACT_APP_API_KEY;

// export default automatically exports the axios instance created by the Axios.create function, so it can be imported elsewhere.
export default Axios.create({

    // This is the base URL for the API call.
    baseURL: 'https://www.googleapis.com/youtube/v3/',

    // These are all the request parameters we need to use this API.
    params: {

        // 'snippet' is the keyword to have this API return a summary of the video (e.g. title, desciption, URL, etc.).
        part: 'snippet',

        // maxResults is the number of video results we'll get that match our search query.
        maxResult: 5,

        // This is our API key, so we can make the API call.
        key: API_KEY

        /*
        Additional default params not listed, but included are:
        order: relevance
        safeSearch: moderate
        */
    }
})