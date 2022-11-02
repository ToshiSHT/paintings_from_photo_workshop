const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showBlock(block) {
        let img = block.querySelectorAll('img');
        img.forEach(item => {
            item.src = item.src.slice(0, -4) + '-1.png';
            item.classList.add('animated','fadeIn');
        });
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        })

    };

    function hideBlock(block) {
        let img = block.querySelectorAll('img');
        img.forEach(item => {
            item.src = item.src.slice(0, -6) + '.png';
            item.classList.remove('animated','fadeIn');
        });
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });

    };

    blocks.forEach(block => {

        block.addEventListener("mouseover", () => {
            showBlock(block);
        });

        block.addEventListener("mouseout", () => {
            hideBlock(block);

        });



    });     

}

export default pictureSize;