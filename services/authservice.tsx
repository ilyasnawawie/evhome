import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
  data: {
    token: string;
  };
  message: string;
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
    } catch (error) {
      console.error(`Error logging in: ${error}`);
      return null;
    }
  }
}
