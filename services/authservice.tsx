import axios, { AxiosResponse } from 'axios';
import nookies from 'nookies';

interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  errors: {
    email?: string[];
    password?: string[];
  };
}

export class AuthService {
  async loginUser(email: string, password: string): Promise<LoginResponse | ErrorResponse> {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const adminURL = process.env.NEXT_PUBLIC_ADMIN_URL;
    const endpoint = `${adminURL}/login/`;

    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(endpoint, params);

      const token = response.data.token;
      nookies.set(null, 'authToken', token, { path: '/' });

      return { token };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as ErrorResponse;
        if (err && err.errors) {
          return err;
        } else {
          return {
            errors: { email: ['An unexpected error occurred.'] },
          };
        }
      } else {
        return {
          errors: { email: ['An unexpected error occurred.'] },
        };
      }
    }
  }
}
