const changeCalcState = (state) => {

    const sizeBlock = document.querySelector('#size'),
          materialBlock = document.querySelector('#material'),
          optionsBlock = document.querySelector('#options'),
          promoBlock = document.querySelector('.promocode'),
          resultBlock = document.querySelector('.calc-price');

          function bindActionToElems (event, elem, prop) {


            elem.addEventListener(event, e => {
                switch (elem.getAttribute('id')){
                    case 'size':
                        state[prop] = elem.value;
                        break;
                    case 'material':
                        state[prop] = elem.value;
                        break;
                    case 'options':
                        state[prop] = elem.value;
                        break;ch
                    case 'promocode':
                        elem.value == 'IWANTPOPART' ?  state[prop] = 'Promo' : state[prop] = 'NOPromo';
                        break
                    
                }
                state['price'] = resultBlock.textContent;


                console.log(state);

            });

           
            

          };

          bindActionToElems('change', sizeBlock, 'size' );
          bindActionToElems('change', optionsBlock, 'options' );
          bindActionToElems('change', materialBlock, 'material');
          bindActionToElems('input', promoBlock, 'promocode');







    



};


export default changeCalcState;