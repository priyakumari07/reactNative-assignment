import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import loginStyle from './login-style';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WatchListService} from '../service/watchlist';

export const WatchList = () => {
  const [watchData, setWatchData] = useState([]);
  const [base64Token, setBase64Token] = useState<string>('');

  const getToken = async () => {
    const temp = await AsyncStorage.getItem('Token');
    if (temp) {
      setBase64Token(base64.encode(temp));
    }
  };

  const getAllWatchList = async () => {
    // GET request using axios with set headers
    const headers = {
      Authorization: `Basic NzNiNGE3NmI2YTU3ZWQxMWE3NmUwMDE1NWQ0MjYxNGQ= `,
    };

    const res = await WatchListService.getAllWatchList({headers});
    setWatchData(res.response.lots);
  };
  React.useEffect(() => {
    getToken();
    getAllWatchList();
  }, []);

  const renderFlatListItem = (item: any) => {
    return (
      <View>
        <Text>{item.auctionTitle}</Text>
        <Text>( {item.quantity} Items )</Text>
      </View>
    );
  };
  return (
    <ScrollView style={loginStyle.scrollViewStyle}>
      <View style={loginStyle.wacthViewStyle}>
        <Text style={loginStyle.registerTextStyle}>Big Iron Watch List</Text>
      </View>
      {watchData.length > 0 ? (
        <FlatList
          data={watchData}
          renderItem={({item}) => renderFlatListItem(item)}
          horizontal={false}
        />
      ) : (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator animating color="blue" />
        </View>
      )}
    </ScrollView>
  );
};
