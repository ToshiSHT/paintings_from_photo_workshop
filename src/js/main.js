import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs  from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import changeCalcState from "./modules/changeCalcState";
import filter from "./modules/filter";

window.addEventListener('DOMContentLoaded', () => {
    let arr = {};
    modals();
    sliders('.feedback-slider-item', '' ,'.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(arr);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options','.promocode','.calc-price');
    changeCalcState(arr);
    filter();


});