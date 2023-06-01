import axios, { AxiosResponse } from 'axios';
import nookies from 'nookies';

interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  error: string;
}

export class AuthService {
  async loginUser(email: string, password: string): Promise<string> {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const endpoint = `https://127.0.0.1:8000/login/`;

    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(endpoint, params);

      const token = response.data.token;
      nookies.set(null, 'authToken', token, { path: '/' });

      return token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as ErrorResponse;
        if (err && err.error) {
          throw new Error(err.error);
        } else {
          throw new Error('An unexpected error occurred.');
        }
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  }
}
