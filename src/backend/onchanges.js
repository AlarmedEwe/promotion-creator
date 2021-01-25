let FileHandle  = require('./fileHandle'),
    XlsxHandle  = require('./XlsxHandle'),
    excelToJson = require('convert-excel-to-json');

function onChanges()
{
    let fileHandle = new FileHandle(),
        flyer      = new XlsxHandle();

    printBtn.onclick = function()
    {
        flyer.printPage();
    }
    // Arquivos
    title.onchange = function ()
    {
        flyer.changeTitle(this.value);
    }

    // Dados
    xlsFile.onchange = function ()
    {
        fileHandle.handleFileName(this);

        flyer.clearPage();
        
        let normalPrices = excelToJson({
                sourceFile: xlsFile.files[0].path
            }),
            fixedPrices  = (xlsFixed.files.length != 0) ? excelToJson({
                sourceFile: xlsFixed.files[0].path
            }) : {};

        flyer.createFlyer(
            normalPrices[Object.keys(normalPrices)[0]],
            fixedPrices[Object.keys(fixedPrices)[0]]
        );
    };
    xlsFixed.onchange = function()
    {
        fileHandle.handleFileName(this);
        flyer.clearPage();

        let normalPrices = (xlsFile.files.length != 0) ? excelToJson({
                sourceFile: xlsFile.files[0].path
            }) : {},
            fixedPrices  = excelToJson({
                sourceFile: xlsFixed.files[0].path
            });
        
        if (xlsFile.files.length != 0)
            flyer.createFlyer(
                normalPrices[Object.keys(normalPrices)[0]],
                fixedPrices[Object.keys(fixedPrices)[0]]
            );
        else
            flyer.createFlyer(
                fixedPrices[Object.keys(fixedPrices)[0]]
            );
    }

    // Cabeçalhos e rodapé
    /*
    titleImg.onchange = function()
    {
        fileHandle.handleFileName(this);
    }
    */

    headerColor.onchange = function()
    {
        flyer.setValue('primary-color', this.value);
    }

    headerTextColor.onchange = function()
    {
        flyer.setValue('text-color', this.value);
    }

    // Borda do Cabeçalho
    headerBorderColor.onchange = function()
    {
        flyer.setValue('secundary-color', this.value);
    }

    headerBorderWeight.onchange = function()
    {
        flyer.setValue('header-border-weight', `${this.value}px`);
    }

    headerBorderStyle.onchange = function()
    {
        flyer.setValue('header-border-style', this.value);
    }

    // Borda do Rodapé
    footerBorderWeight.onchange = function()
    {
        flyer.setValue('footer-border-weight', `${this.value}px`);
    }

    footerBorderStyle.onchange = function()
    {
        flyer.setValue('footer-border-style', this.value);
    }

    // Design geral
    colNumber.onchange = function()
    {
        flyer.setValue('grid-cols', this.value);
    }
    rowNumber.onchange = function()
    {
        flyer.setValue('grid-row', this.value);
    }

    productFont.onchange = function()
    {
        flyer.setValue('product-font', this.value);
    }

    // Etiqueta de preço
    priceTagFont.onchange = function()
    {
        flyer.setValue('price-tag-font', this.value);
    }
    priceTagColor.onchange = function()
    {
        flyer.setValue('price-tag-color', this.value);
    }
    priceTagImg.onchange = function()
    {
        // price-tag-img
    }

    // Preços fixos
    fixedCols.onchange = function()
    {
        flyer.setValue('fixed-cols', this.value);
    }
    fxBgColor.onchange = function()
    {
        flyer.setValue('fx-bg-color', this.value);
    }
    fxBdColor.onchange = function()
    {
        flyer.setValue('fx-bd-color', this.value);
    }
    fxBdWeight.onchange = function()
    {
        flyer.setValue('fx-bd-weight', this.value + 'px');
    }
    fxBdStyle.onchange = function()
    {
        flyer.setValue('fx-bd-style', this.value);
    }
    fxFtColor.onchange = function()
    {
        flyer.setValue('fx-ft-color', this.value);
    }

        // Etiqueta de preço
        fxPriceColor.onchange = function()
        {
            flyer.setValue('fx-price-color', this.value);
        }
        fxPriceBg.onchange = function()
        {
            flyer.setValue('fx-price-bg', this.value);
        }
        // Titulo
        fxTitleBgColor.onchange = function()
        {
            flyer.setValue('fx-title-bg-color', this.value);
        }
        fxTitleBdColor.onchange = function()
        {
            flyer.setValue('fx-title-bd-color', this.value);
        }
        fxTitleBdWeight.onchange = function()
        {
            flyer.setValue('fx-title-bd-weight', this.value + 'px');
        }
        fxTitleBdStyle.onchange = function()
        {
            flyer.setValue('fx-title-bd-style', this.value);
        }
        fxTitleFtColor.onchange = function()
        {
            flyer.setValue('fx-title-ft-color', this.value);
        }
        fxTitleFtSize.onchange = function()
        {
            flyer.setValue('fx-title-ft-size', this.value);
        }
        fxTitleFtFamily.onchange = function()
        {
            flyer.setValue('fx-title-ft-family', this.value);
        }
}

module.exports = onChanges;