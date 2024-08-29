/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../configurations/setup';


export const signup = async(body:any) => {
    try{
        const response = await axios.post('/api/signup', body,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    }catch(error:any){
        return error.response
    }
}