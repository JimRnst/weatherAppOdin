import { weatherAPI } from "./api";

const localStorageReview = (function(){
    const nameCity = document.querySelector('#name');

    if(localStorage.length === 0){
        weatherAPI("reynosa")
    } else{
        weatherAPI(localStorage.getItem('city'))
    }
})

export { localStorageReview }