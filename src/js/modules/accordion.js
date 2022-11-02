const accordion = (triggerBtns) => {

    const btns = document.querySelectorAll(triggerBtns);

    btns.forEach(btn => {

        btn.addEventListener('click', function(){
            if (!this.classList.contains('active-style')){

                let nextElem = this.nextElementSibling;
                btns.forEach(elem => {
                    elem.classList.remove('active-style');
                    elem.nextElementSibling.classList.remove('active-content')
                    elem.nextElementSibling.style.maxHeight = 0; 
    
                });
    
                this.classList.add('active-style');
                nextElem.classList.add('active-content')  
                nextElem.style.maxHeight = nextElem.scrollHeight + 80 + 'px';

            } else {
                
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content')
                this.nextElementSibling.style.maxHeight = 0; 


            }
         

        });
    });



};

export default accordion;

  