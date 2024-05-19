export async function getData(rows) {
  const data = await Api();
  return data.slice(0, rows)
}


async function Api() {
  const apiKey = '8377b3f5-8f43-4ab1-9459-52bbd74c025a';
  // https://api.simpleswap.io/get_market_info?api_key=8377b3f5-8f43-4ab1-9459-52bbd74c025a
  // https://api.simpleswap.io/get_all_currencies?api_key=8377b3f5-8f43-4ab1-9459-52bbd74c025a
  const apiUrl = 'https://api.simpleswap.io/get_market_info?api_key=8377b3f5-8f43-4ab1-9459-52bbd74c025a';

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  }

  const response = await fetch(apiUrl, requestOptions);
  const data = await response.json()
  return data
};