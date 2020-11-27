'use strict';

xlsFile.onchange = function ()
{
    xlsLabel.innerHTML = this.files[0].name;
}

titleImg.onchange = function ()
{
    titleLabel.innerHTML = this.files[0].name;
}