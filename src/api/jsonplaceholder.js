import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 8cc90879ea0ef07e9c36cdcae9a074c2f8e212a4d81480a35c3c9a5d813b76d7'
    }
});