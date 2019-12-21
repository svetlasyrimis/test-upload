import axios from 'axios';

export const postUser = async (userData) => {
  const resp = await axios.post("http://localhost:3000/users", userData)
  return resp
}