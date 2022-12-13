import './style/style.css'
import './page/home'
import { localStorageReview } from './functions/localStorage';

window.addEventListener('DOMContentLoaded', () => {
    localStorageReview();
})