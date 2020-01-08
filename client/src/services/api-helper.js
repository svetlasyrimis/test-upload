import axios from 'axios';


export const getUsers = async () => {
  const resp = await axios("http://localhost:3000/users");
  return resp.data
}
export const postUser = async (userData) => {
  const resp = await axios.post("http://localhost:3000/users", userData )
  return resp
}

