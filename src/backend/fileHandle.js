'use strict';

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
}, 1500);

xlsFile.onchange = function ()
{
    xlsLabel.innerHTML = this.files[0].name;
}

titleImg.onchange = function ()
{
    titleLabel.innerHTML = this.files[0].name;
}