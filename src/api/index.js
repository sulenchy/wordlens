import axios from 'axios';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';
export const getDefinitions = async(keyword) => {
    try {
        const {data, status} = await axios.get(`${url}/${keyword}`);
        return { data, status };
    } catch ({ message, response: { status }}) {
        return { message, status }
    }
}