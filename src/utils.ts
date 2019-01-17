import axios, { AxiosResponse } from 'axios';

export const graphQLFetch = async (query: {
  query: string;
}): Promise<AxiosResponse> => {
  const { data } = await axios('/graphql', {
    method: 'POST',
    data: query,
    withCredentials: true
  });
  return data;
};
