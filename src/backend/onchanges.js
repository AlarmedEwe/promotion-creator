let FileHandle  = require('./fileHandle'),
    XlsxHandle  = require('./XlsxHandle'),
    excelToJson = require('convert-excel-to-json');

function onChanges()
{
    let fileHandle = new FileHandle(),
        xlsxFile   = new XlsxHandle();

    printBtn.onclick = function()
    {
        xlsxFile.printPage();
    }
    // Arquivos
    title.onchange = function ()
    {
        xlsxFile.changeTitle(this.value);
    }

    // Dados
    xlsFile.onchange = function ()
    {
        fileHandle.handleFileName(this);
        
        let result = excelToJson({
            sourceFile: xlsFile.files[0].path
        });

        xlsxFile.createFlyer(result[Object.keys(result)[0]]);
    };

    // Cabeçalhos e rodapé
    titleImg.onchange = function()
    {
        fileHandle.handleFileName(this);
    }

    headerColor.onchange = function()
    {
        xlsxFile.setValue('primary-color', this.value);
    }

    headerTextColor.onchange = function()
    {
        xlsxFile.setValue('text-color', this.value);
    }

    // Borda do Cabeçalho
    headerBorderColor.onchange = function()
    {
        xlsxFile.setValue('secundary-color', this.value);
    }

    headerBorderWeight.onchange = function()
    {
        xlsxFile.setValue('header-border-weight', `${this.value}px`);
    }

    headerBorderStyle.onchange = function()
    {
        xlsxFile.setValue('header-border-style', this.value);
    }

    // Borda do Rodapé
    footerBorderWeight.onchange = function()
    {
        xlsxFile.setValue('footer-border-weight', `${this.value}px`);
    }

    footerBorderStyle.onchange = function()
    {
        xlsxFile.setValue('footer-border-style', this.value);
    }

    // Design geral
    colNumber.onchange = function()
    {
        
    }

    productFont.onchange = function()
    {
        xlsxFile.setValue('product-font', this.value);
    }

    // Etiqueta de preço
    priceColor.onchange = function() {
        xlsxFile.setValue('price-tag-color', this.value);
    }
}

module.exports = onChanges;