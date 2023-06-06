import axios, { AxiosResponse } from 'axios';
import nookies from 'nookies';

interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  message: string;
  errors: {
    detail: string[];
  };
}

export class AuthService {
  async loginUser(email: string, password: string): Promise<string> {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const endpoint = `https://127.0.0.1:443/login/`;

    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(endpoint, params);

      const token = response.data.token;
      nookies.set(null, 'authToken', token, { path: '/' });

      return token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as ErrorResponse;
        if (err && err.errors && err.errors.detail) {
          throw new Error(`${err.message}: ${err.errors.detail.join(' ')}`);
        } else {
          throw new Error('An unexpected error occurred.');
        }
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  }
}
