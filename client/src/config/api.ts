import axios from 'axios';

let API_URL = '';

if (process.env.NODE_ENV === 'production') {
    API_URL = '';
} else {
    API_URL = 'localhost:5000';
}

axios({
    baseURL: API_URL,
});
