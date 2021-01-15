function Loader()
{
    let winLoad = false,
        iLoad   = false;

    // window.onload   = () => { winLoad = true; }
    // flyer.contentDocument.addEventListener('DOMContentLoaded', () => {
    //     iLoad = true;
    // });

    let loader = setInterval(() => {
        // if(winLoad && iLoad){
            load.style.display = 'none';
            clearInterval(loader);
        // }
    }, 2000);
}

module.exports = Loader;