import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{key: '82a25a58831d4648b2f5a5436863cef5'}});