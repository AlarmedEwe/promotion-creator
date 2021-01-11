'use strict';
const excelToJson = require('convert-excel-to-json');

var flyerContent;
setTimeout(() => { flyerContent = flyer.contentDocument; }, 1500);

function setValue(variable, value)
{
    flyerContent.querySelector(':root').style.setProperty(`--${variable}`,value);
}

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

// On Changes
// Arquivos
title.onchange = function ()
{
    flyerContent.querySelector('#flyerHeader h1').innerHTML = this.value;
    flyerContent.title = this.value;
}

// Dados
xlsFile.onchange = function ()
{
    handleFileName(this);
    
    let result = excelToJson({
        sourceFile: xlsFile.files[0].path
    });

    createFlyer(result[Object.keys(result)[0]]);
};

// Cabeçalhos e rodapé
titleImg.onchange = function()
{
    handleFileName(this);
}

headerColor.onchange = function()
{
    setValue('primary-color', this.value);
}

headerTextColor.onchange = function()
{
    setValue('text-color', this.value);
}

// Borda do Cabeçalho
headerBorderColor.onchange = function()
{
    setValue('secundary-color', this.value);
}

headerBorderWeight.onchange = function()
{
    console.log(this.value);
    setValue('header-border-weight', `${this.value}px`);
}

headerBorderStyle.onchange = function()
{
    console.log(this.value);
    setValue('header-border-style', this.value);
}

// Borda do Rodapé
footerBorderWeight.onchange = function()
{
    setValue('footer-border-weight', `${this.value}px`);
}

footerBorderStyle.onchange = function()
{
    setValue('footer-border-style', this.value);
}

// Design geral
colNumber.onchange = function()
{
    
}

productFont.onchange = function()
{
    setValue('product-font', this.value);
}

// Etiqueta de preço
priceColor.onchange = function() {
    setValue('price-tag-color', this.value);
}