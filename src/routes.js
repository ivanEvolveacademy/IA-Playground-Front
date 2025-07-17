import axios from 'axios';

const BASE_URL = 'https://ia-playground-production.up.railway.app';

export const fetchData = async (endpoint) => {
	try {
		const response = await axios.get(`${BASE_URL}/${endpoint}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};


