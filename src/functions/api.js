const body = document.querySelector('body')
const nameCity = document.querySelector('#name');
const country = document.querySelector('#country');
const temp = document.querySelector('#temp');
const feelslike = document.querySelector('#feelslike');
const tempMaxMin = document.querySelector('#tempMaxMin');
const description = document.querySelector('#description');
const humidiy = document.querySelector('#humidity');
const form = document.querySelector('form');
const input = document.querySelector('#input-search');
const container = document.querySelector('#container');
const card = document.querySelector('#card');

    

async function weatherAPI(location){
    try {
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=884ed5debe51a2eb936519a83d93ae35`,{mode: "cors"})
        setSpinner(true)
        const res = await api.json();
        const cargarPag = await loadPicture(res.weather[0].main + "+sky");
        console.log(res.main.temp);
        const getName = res.name;
        const getCountry = res.sys.country;
        const getTemp = Math.round(res.main.temp)+"°";
        const getFeelslike = 'Feels like: '+ Math.round(res.main.feels_like)+"°";
        const getTempMaxMin = 'Low/High: '+ Math.round(res.main.temp_min)+"°" + '/' + Math.round(res.main.temp_max)+"°";
        const getHumidiy = 'Humidity: ' + res.main.humidity + '%'
        const getDescription = res.weather[0].description;
        createHTML(getName, getCountry, getTemp, getFeelslike, getTempMaxMin, getDescription, getHumidiy);
        setSpinner(false);
    } catch{
        showImage('/assets/bg.png');
        body.style.color = "black"
        createHTML('Reynosa', 'MX', '0°', 'Feels like: 0°', 'Low/High: 0°/0°', 'Not Found', 'Humidity: 0°');
        setSpinner(false);
        localStorage.setItem('city', "reynosa")

    }
}

async function loadPicture(description){
    try {
        const img = await fetch(`https://pixabay.com/api/?key=20596907-de144373076335913c5de0ef9&q=${description}&image_type=photo&max_width=1080`, {mode: "cors"});
        const resultado = await img.json();
        showImage(resultado.hits[0].largeImageURL);
        
    } catch (error) {
        console.log(error);
    }
}

searchCity()

function setSpinner(action){
    let showSpinner = action;

    if(showSpinner){
        const div = document.createElement('div');
        container.appendChild(div)
        div.classList.add('dots');
    } else{
        document.querySelector('.dots').remove()
    }
}

function createHTML(setName, setCountry, setTemp, setFeelslike, setTempMaxMin, setDescription, setHumidity){
    nameCity.innerText = setName;
    country.innerText = setCountry;
    temp.innerText = setTemp;
    feelslike.innerText = setFeelslike;
    tempMaxMin.innerText = setTempMaxMin;
    description.innerText = setDescription;
    humidiy.innerText = setHumidity;
}

function showImage(url){
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}

function searchCity(){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('city', input.value)
        weatherAPI(input.value)
        input.value = "";
        
    });
};

export {weatherAPI}