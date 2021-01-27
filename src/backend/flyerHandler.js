const   fs = require('fs'),
        {shell} = require('electron');

class FlyerHandler
{
    flyerContent;

    constructor()
    {
        setTimeout(() => {
            this.flyerContent = flyer.contentDocument;
        }, 1500);
    }

    setValue(variable, value)
    {
        this.flyerContent.querySelector(':root').style.setProperty(`--${variable}`,value);
    }

    clearPage()
    {
        this.flyerContent.querySelectorAll('main:not(:first-child)').forEach(main => {
            main.remove();
        });
        this.flyerContent.getElementById('flyerList').innerHTML = "";
    }

    createProductExhibition(product)
    {
        let div = document.createElement('div');

        let description = (product.B) ?
            `<p>${product.A.toLowerCase()} ${product.B}</p>`
            : `<p>${product.A.toLowerCase()}</p>`;
        if (product.C != null) description += `<p class="obs">${product.C}</p>`;
        description += `<div class="price">R$ ${product.D.toFixed(2).replace('.',',')}</div>`;
        if (product.E != null) description += `<div class="price">R$ ${product.E.toFixed(2).replace('.',',')}</div>`;
        
        div.innerHTML = `<img src="${product.F}" alt="${product.A}"/>
            <div>${description}</div>`;

        return div;
    }

    convertImgToBloob(img, callback)
    {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            let reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', img);
        xhr.responseType = 'blob';
        xhr.send();
    }

    createPage()
    {
        let page    = document.createElement('main'),
            main    = document.createElement('div'),
            header  = document.createElement('div'),
            footer  = document.createElement('div');

        header.classList.add('flyerHeader');
        main.classList.add('flyerMain');
        footer.classList.add('flyerFooter');

        header.innerHTML    = '<h2>Visite nosso portal: portal.gramense.com.br</h2>';
        main.innerHTML      = '<div class="flyerAlert"><p>IMAGENS DE CARÁTER ILUSTRATIVO. RESERVAMOS O DIREITO DE CORRIGIR EVENTUAIS ERROS GRÁFICOS.</p></div>';
        main.innerHTML     += '<div class="flyerList"></div>';
        footer.innerHTML    = '<p>VALIDADE 26 E 27 DE NOVEMBRO DE 2020 OU ENQUANTO DURAR O ESTOQUE.</p>';

        page.appendChild(header);
        page.appendChild(main);
        page.appendChild(footer);
        this.flyerContent.body.appendChild(page);

        return main;
    }

    createFlyerGrid(promoPrices, fixedPrices = [], numRows = 6, numCols = 5)
    {
        let flyerList = this.flyerContent.getElementById('flyerList'),
            hasFixeds = (fixedPrices.length != 0);
     
        // Removes header from xls tables
        promoPrices.shift();
        if(hasFixeds) fixedPrices.shift();

        // Initialize counters
        let colCounter, rowCounter, promoCounter, fixedCounter;
        rowCounter = promoCounter = fixedCounter = 0;
        colCounter = 1;
        
        for (let i = 0; i < (promoPrices.length + fixedPrices.length); i++)
        {
            // Create a new row or get the last one
            let row = (colCounter == 1)
                ? document.createElement('div')
                : flyerList.querySelector('.row:last-child');

            // Separate fixed prices from normal prices
            if (hasFixeds && rowCounter == 2 && fixedCounter < fixedPrices.length)
            {
                if (colCounter == 1) row.classList.add('fixed');
                
                row.appendChild(this.createProductExhibition(fixedPrices[fixedCounter]));

                if(++fixedCounter == fixedPrices.length)
                    colCounter = 0;
            } else {
                row.appendChild(this.createProductExhibition(promoPrices[promoCounter]));
                promoCounter++;
            }

            // Creates new page
            if(rowCounter == numRows && colCounter == 1)
            {
                let main = this.createPage();
                flyerList = main.querySelector('.flyerList');
            }

            // Append row to page
            if (colCounter == 1 || colCounter == 0)
            {
                row.classList.add('row');
                flyerList.appendChild(row);
            }

            // Increment counters
            colCounter = (colCounter < numCols) ? colCounter + 1 : 1;
            if (colCounter == 1)
                rowCounter = (rowCounter < numRows) ? rowCounter + 1 : 1;
        }
    }

    changeTitle(title)
    {
        this.flyerContent.querySelector('#flyerHeader h1').innerHTML = title;
        this.flyerContent.title = title;
    }

    printPage()
    {
        flyer.contentWindow.print();
    }

    savePage()
    {
        let result  =  new XMLSerializer().serializeToString(this.flyerContent);

        result = result.replace('css/flyer', __dirname.replaceAll('\\','/') + '/../css/flyer');

       fs.writeFile('docs/out.html', result, res => {
           alert('Salvo com sucesso');
           shell.openExternal(__dirname + '\\..\\..\\docs\\out.html');
       });
    }
}

module.exports = FlyerHandler;