function Loader()
{
    return new Promise(res => {
        let winLoad = false,
            iLoad   = false;
    
        // window.onload   = () => { winLoad = true; }
        // flyer.contentDocument.addEventListener('DOMContentLoaded', () => {
        //     iLoad = true;
        // });
    
        let loader = setInterval(() => {
            // if(winLoad && iLoad){
                console.clear();
                load.style.display = 'none';
                currentWindow.maximize();
                res(1);
                clearInterval(loader);
            // }
        }, 2000);
    });
}

module.exports = Loader;