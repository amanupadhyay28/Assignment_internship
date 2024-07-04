import {Post } from '../interfaces/Post';
import axios from 'axios';
const BASE_URL='https://jsonplaceholder.typicode.com';
export const fetchPosts= async ():Promise<Post[]>=>{
    try{
        const response =await axios.get<Post[]>(`${BASE_URL}/posts`);
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error))
    throw new Error(error.response?error.response.data:error.message);
    else{
        throw new Error('An unexpected error occurred');
    }
}
};