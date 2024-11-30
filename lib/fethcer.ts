import axios from 'axios';

const fethcer = (url: string) => {
    return axios.get(url).then((response) => {return response.data;});
}
export default fethcer;