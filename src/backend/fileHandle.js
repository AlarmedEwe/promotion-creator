'use strict';

let now     = new Date,
    months  = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO',
                'AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'],
    winLoad = false,
    iLoad   = false;

setTimeout(() => {
    flyer.contentDocument.querySelector('#flyerFooter p').innerHTML =
        `VALIDADE ${now.getDate()} A ${now.getDate() + 2} `+
        `DE ${months[now.getMonth()]} DE ${now.getFullYear()} OU ENQUANTO DURAR O ESTOQUE.`;
}, 1400);

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