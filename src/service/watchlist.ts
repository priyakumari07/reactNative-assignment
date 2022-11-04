import {Iprops} from '../model/watchlist-request';
import api from './api-service';

export class WatchListService {
  static getAllWatchList = async (item: Iprops) => {
    const response = await api
      .get('/myaccount/watches', item)
      .catch(err => console.log(err));
    if (!response) {
      throw new Error('No WatchList Found');
    }
    return response.data;
  };
}
