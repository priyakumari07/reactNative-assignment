import {proxy} from 'valtio';

interface IStoreToken {
  error: string;
  token: string;
}

const storeToken: IStoreToken = proxy({
  error: '',
  token: '',
});

export default storeToken;
