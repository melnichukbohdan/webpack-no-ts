import './index.html'
import './index.scss'
import {mult, sum} from "./modules/culc";
import waterfall from './img/waterfall.png'

// import image in JS file.

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = waterfall;
img.width = 700;
imgWrap.append(img);

console.log(mult(2, 4));
console.log(mult(3, 4));
