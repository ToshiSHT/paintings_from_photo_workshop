const checkTextInputs = (selector) => {

   const textInputs = document.querySelectorAll(selector);

   textInputs.forEach( elem => {
    elem.addEventListener('keypress', (e) => {
     if (e.key.match(/[^а-яё 0-9]/ig)){
        e.preventDefault();
     }
        
    });

    elem.addEventListener('input', e => {
        if (elem.value.match(/[a-z]/ig)) {
            elem.value = '';
        }
    });


   });



};

export default checkTextInputs;