export const graphQLFetch = async (query: { query: string }) => {
  const response = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    body: JSON.stringify(query),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
};
