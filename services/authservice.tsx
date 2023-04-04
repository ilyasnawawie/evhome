import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
  data: {
    token: string;
  };
  message: string;
  status: string;
}

interface ErrorResponse {
  message: string;
  errors: {
    [key: string]: string;
  };
  status: string;
}

export class AuthService {
  async loginUser(username: string, password: string): Promise<string | null> {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post('https://api.evhome.solutions:22100/login', {
        username: username,
        password: password,
      });

      if (response.data.status === 'ok') {
        console.log(response.data.message);
        const token = response.data.data.token;
        localStorage.setItem('authToken', token);
        return token;
      } else {
        console.log('Login failed.');
        return null;
      }
    } catch (error: unknown) {
      const err = error as ErrorResponse;
      if (err.errors) {
        console.error(`Error logging in: ${err.message}`);
        for (const [key, value] of Object.entries(err.errors)) {
          console.error(`${key}: ${value}`);
        }
      } else {
        console.error(`Unexpected error: ${err.message}`);
      }
      return null;
    }
  }
}
