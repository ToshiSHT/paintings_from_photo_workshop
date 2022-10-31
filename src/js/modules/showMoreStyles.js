import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {

    const buttonTrigger = document.querySelector(trigger);  
          
   /*  buttonTrigger.addEventListener('click', e => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
            
        });
        buttonTrigger.remove();
    }); 
    */

    buttonTrigger.addEventListener('click', function() {

        getResource('assets/db.json')
           // .then(res => console.log(res))
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));
            this.remove();

    });

    function createCards (response) {
        response.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${item.src} alt="style">
                <h4>${item.title}</h4>
                 <a href="${item.link}">Подробнее</a>
             </div>
            `;

            document.querySelector(wrapper).appendChild(card);
            
        });

    }


/*     <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    <div class=styles-block>
        <img src=assets/img/styles-5.jpg alt>
        <h4>Пастелью</h4>
        <a href="#">Подробнее</a>
    </div>
</div> */






};


export default showMoreStyles;