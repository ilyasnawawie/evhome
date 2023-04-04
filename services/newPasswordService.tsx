import axios, { AxiosResponse } from 'axios';

export interface NewPasswordResponse {
  message: string;
  errors?: {
    [key: string]: string;
  };
  status: string;
}

export class AuthNewPasswordService {
  async changePassword(oldPassword: string, newPassword: string): Promise<NewPasswordResponse> {
    try {
      // Check if there is an authToken in local storage
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // If there is no authToken, return an error message
        return {
          message: 'Unauthorized',
          status: 'failed',
        };
      }

      // Make a POST request to the server to change the password
      const response: AxiosResponse<NewPasswordResponse> = await axios.post(
        'https://api.evhome.solutions:22100/newpassword',
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          // Add the Authorization header with the authToken
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Check if the response status is OK
      if (response.data.status === 'ok') {
        console.log(response.data.message);
        // Return the response data
        return response.data;
      } else {
        console.log('Change password failed.');
        // Return the response data if the status is not OK
        return response.data;
      }
    } catch (error) {
      // Catch any errors and return a generic error message
      console.error(`Error changing password: ${error}`);
      return {
        message: 'Server error',
        status: 'failed',
      };
    }
  }
}
