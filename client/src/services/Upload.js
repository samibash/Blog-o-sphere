import axios from 'axios'

const URL = 'http://localhost:3001';

const api = axios.create({
    baseURL: `${URL}/upload`
})

export const createPost = async (data) => {
    try {
        const resp = await api.post('/', data)
        console.log(resp)
        return resp.data.upload
    } catch (error) {
        console.log(error)
    }
}
