import axios from 'axios'

const URL = 'http://localhost:3001';

const api = axios.create({
    baseURL:   `${URL}/posts`
})

export const fetchAllPosts = async ()=>{
    try {
      const response = await api.get('/')
    return response.data;  
    } catch (e) {
        console.log({msg:'e',e})
    }
}

