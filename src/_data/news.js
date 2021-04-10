const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
    //const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=de&apiKey=adb9fedfe4904fe889d697e064c6c69b&pageSize=5`);
    
    return response.data;
  } catch (error) {
    console.error(error);
  }

};