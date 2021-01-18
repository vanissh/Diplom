'use strict';

import headerActive from './modules/headerActive';
import slider from './modules/sliders';
import menu from './modules/burgerMenu';
import showArrow from './modules/arrow';
import maskPhone from './modules/maskPhone';
import calc from './modules/calculator';
import Validator from './modules/validator';
import sendData from './modules/sendData';

headerActive();

slider();

menu();

showArrow();

calc();

maskPhone();

sendData(Validator);