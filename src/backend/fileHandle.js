'use strict';

setTimeout(() => {
    load.style.display = 'none';
}, 1500);

xlsFile.onchange = function ()
{
    xlsLabel.innerHTML = this.files[0].name;
}

titleImg.onchange = function ()
{
    titleLabel.innerHTML = this.files[0].name;
}