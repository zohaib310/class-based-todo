import api from './api';
import axios from 'axios';

class ApiServices {
  constructor(props) {}
  todo_json = (callback) => {
    let config = {
      method: 'get',
      url: api.dummay_data_from_json,
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        callback({
          isSuccess: true,
          response: response,
        });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        callback({
          isSuccess: false,
          response: error,
        });
      });
  };
}

const apiService = new ApiServices();
export default apiService;
