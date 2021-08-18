import axios from 'axios';

export const getSummary = () => {
  axios.get(`https://api.covid19api.com/summary`)
}
