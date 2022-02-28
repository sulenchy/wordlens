import axios from 'axios';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';
export const getDefinitions = async(keyword) => {
    try {
        const {data, status} = await axios.get(`${url}/${keyword}`);
        return { data, status };
    } catch ({ response: { status = '404', data: { message } = {} } = {} }) {
        return { message, status }
    }
}