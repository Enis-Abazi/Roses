document.addEventListener('DOMContentLoaded', function() {
    onload = () => {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 1000);
    };

    const myAudio = document.querySelector('#myAudio')
    if (myAudio) {
        myAudio.play()
    }
    const click = document.querySelector('.click');
    click.textContent = ' > Preke qitu jeta jem <'
    let isTrue = false;

    click.addEventListener('click', () => {
        if (!isTrue) {
            click.textContent = '1 🌷 prej enisit , a don ma prekem edhe 1 her'
        } else {
            click.textContent = '🌷 , 🌹 , 🌷 , 🌹 , (TE DUA TEPER)'
        }
        isTrue = !isTrue;
    })
})