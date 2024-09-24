async function getTest() {
  const url = "https://viacep.com.br/ws/06345000/json/";
  await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getTest();
