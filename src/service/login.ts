import axios from 'axios';
import {ISignIn} from '../model/login-request';
import storeToken from '../state';
import api from './api-service';

export class LoginService {
  static signin = async (user: ISignIn) => {
    const response = await api.post('/authentication/signin', user);

    console.log('LoginService', response);
    if (!response.data || response.data.length === 0) {
      throw new Error('Please Enter your userName and password');
    }
    storeToken.token = response.data.token;
    return response.data;
  };
}
