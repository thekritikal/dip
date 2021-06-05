import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/products/';
// const baseURL = 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		//Origin: 'http://localhost:3000',
		//'Access-Control-Allow-Origin': 'http://localhost:3000',
		//'Access-Control-Allow-Origin': "*",
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;