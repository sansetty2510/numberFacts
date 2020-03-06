async function getData(url) {
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return [];
}
export default getData;
