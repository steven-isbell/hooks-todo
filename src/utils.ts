import axios, { AxiosResponse } from 'axios';

export const graphQLFetch = async (query: {
  query: string;
}): Promise<AxiosResponse> => {
  const { data } = await axios.post('http://localhost:3001/graphql', {
    method: 'POST',
    data: query,
    withCredentials: true
  });
  return data;
};
