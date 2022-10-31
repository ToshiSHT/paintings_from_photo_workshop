const showMoreStyles = (trigger, stiles) => {

    const cards = document.querySelectorAll(stiles),
          buttonTrigger = document.querySelector(trigger);  
          
    buttonTrigger.addEventListener('click', e => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
            
        });
        buttonTrigger.remove();
    });      






};


export default showMoreStyles;