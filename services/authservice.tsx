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
      console.log(username)
      console.log(password)
      let params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      const response: AxiosResponse<LoginResponse> = await axios.post('http://192.168.0.21:22100/admin/login', params);

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
