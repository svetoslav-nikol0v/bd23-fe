import { IRequestParams } from './../types/interfaces';
import { API_URL } from '../config/constants';

const apiRequest = async <T>(params: IRequestParams): Promise<T> => {
    const { method, endpoint, body, token } = params;

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method,
            headers,
            credentials: 'include',
            ...(method === 'POST' ? { body } : {}),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export default apiRequest;
