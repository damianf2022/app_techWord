import axios from 'axios';

export const back_call = axios.create({
	baseURL: 'https://tech-k3o8.onrender.com/api/v1/'
	// 'http://localhost:8080/api/v1'
	// 'https://techworld-production.up.railway.app/api/v1/',
});
//https://back-deploy-tech-production.up.railway.app/api/v1
