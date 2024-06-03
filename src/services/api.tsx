import axios from 'axios';

export const fetchFinancialData = async () => {
  try {
    
    // const response = await axios({
    //   method: 'get',
    //   url: 'http://localhost:8000/financials',
    //   withCredentials: false,
      
    // });
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/financials',
      headers: { }
    };
    
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching financial data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export default fetchFinancialData;