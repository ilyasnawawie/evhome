import axios, { AxiosResponse } from 'axios';

interface ForgotPasswordResponse {
  message: string;
  status: string;
}

interface ForgotPasswordRequest {
  email: string;
}

export class ForgotPasswordService {
  async forgotPassword(email: string): Promise<ForgotPasswordResponse> {
    try {
      const response: AxiosResponse<ForgotPasswordResponse> = await axios.post(
        'https://api.evhome.solutions:22100/forgotPassword',
        { email }
      );

      return response.data;
    } catch (error) {
      console.error(`Error sending forgot password request: ${error}`);
      throw error;
    }
  }
}
