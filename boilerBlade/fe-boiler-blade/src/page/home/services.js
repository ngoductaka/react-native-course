import { apiClient } from '../../helper/api_client';

export const getAllUser = () => apiClient.get('/application/getuser');
export const getApplication = () => apiClient.get('/application');
