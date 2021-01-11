'use strict';
const excelToJson = require('convert-excel-to-json');

let flyerContent = flyer.contentDocument;

xlsFile.onchange = () => {
    let result = excelToJson({
        sourceFile: xlsFile.files[0].path
    });

    createFlyer(result[Object.keys(result)[0]]);
};

function createFlyer(list)
{
    list.shift();
    let flyerList = flyerContent.getElementById('flyerList');

    for (let product of list)
    {
        let div = document.createElement('div');
        div.innerHTML = `<img src="${product.C}" alt="${product.A}"/>
            <div>
                <p>${product.A.toLowerCase()}</p>
                <div class="price">R$ ${product.B.toFixed(2).replace('.',',')}</div>
            </div>`;
        flyerList.appendChild(div);
    }
}

title.onchange = function () {
    flyerContent.querySelector('#flyerHeader h1').innerHTML = this.value;
}