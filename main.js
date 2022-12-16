const db = ' https://22f1-2806-108e-13-6a7d-7998-993f-f8f4-bc16.ngrok.io';
const cards = document.getElementById('container-article');

const getArticles = () => {
    const res = fetch(`${db}/articles`, 
    { mode: 'no-cors', headers: {'Access-Control-Allow-Origin':'http://localhost:8000'}, method: "GET" }) 
    .then((res).json())
    .then((jsonData => {
        console.log(jsonData);
        data = jsonData
    }))
}
     