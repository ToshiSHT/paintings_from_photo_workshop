const filter =() => {
     const types = ['.all','.lovers','.chef','.girl','.guy','.grandmother','.granddad'],
           wrapper = document.querySelector('.portfolio-wrapper'),
           menu = document.querySelector('.portfolio-menu');

           types.forEach(type =>{
            menu.querySelector(type).addEventListener('click', (e) => {
                if (e.target && e.target.tagName == 'LI'){
                    menu.querySelectorAll('li').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');
                }
                let card =  wrapper.querySelectorAll(type);
                wrapper.querySelectorAll(types[0]).forEach(i => {
                    document.querySelector('.portfolio-no').style.display = 'none';
                    i.style.display = 'none';
                    i.classList.remove('animated','fadeIn');
                });    
                    if(card.length > 0) {
                     card.forEach(elem => {
                        
                    elem.style.display = 'block';
                    elem.classList.add('animated', 'fadeIn');
                     });
                    } else {
                        document.querySelector('.portfolio-no').style.display = 'block';
                    }
            });
        });
    }

export default filter;