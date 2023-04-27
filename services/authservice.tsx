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
  async loginUser(username: string, password: string): Promise<string> {
    let params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || '';
    const endpoint = `${adminUrl}/admin/login`;

    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(endpoint, params);

      if (response.data.status === 'ok') {
        const token = response.data.data.token;
        localStorage.setItem('authToken', token);
        return token;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as ErrorResponse;
        if (err.errors) {
          if (err.errors.username) {
            throw new Error(err.errors.username);
          } else if (err.errors.password) {
            throw new Error('The password you entered is incorrect.');
          } else {
            const errorMessages = Object.values(err.errors).join(', ');
            throw new Error(errorMessages);
          }
        } else {
          throw new Error(err.message);
        }
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  }
}
