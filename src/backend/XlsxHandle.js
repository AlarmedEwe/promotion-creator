class XlsxHandle
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

    createProductExhibition(product, withFixed = false)
    {
        let div = document.createElement('div');

        if (withFixed)
            if (product.isFixedPrice) div.classList.add('fixed');

        product = (withFixed) ? product.item : product;
        
        div.innerHTML = `<img src="${product.D}" alt="${product.A}"/>
            <div>
                <p>${product.A.toLowerCase()} ${product.B}</p>
                <div class="price">R$ ${product.C.toFixed(2).replace('.',',')}</div>
            </div>`;

        return div;
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

    separateFixedPrices(promoPrices, fixedPrices, numRows = 6, numCols = 5)
    {
        let finalList    = [],
            item         = 0,
            promoCounter = 0,
            fixedCounter = 0;

        for (let i = 0; i < (promoPrices.length + fixedPrices.length); i++)
        {
            if (item < numCols * 2 || item >= numCols * 3)
            {
                finalList.push({"isFixedPrice": false, "item": promoPrices[promoCounter]});
                promoCounter++;
            } else
            {
                if (fixedPrices[fixedCounter] != undefined)
                    finalList.push({"isFixedPrice": true, "item": fixedPrices[fixedCounter]});
                fixedCounter++;
            }

            item = (item < numRows * numCols)
                ? item + 1
                : item = 1;
        }

        return finalList;
    }

    createFlyer(promoPrices, fixedPrices = null, numRows = 6, numCols = 5)
    {
        let flyerList = this.flyerContent.getElementById('flyerList'),
            hasFixeds = (fixedPrices != null);
        
        promoPrices.shift();
        if(hasFixeds) fixedPrices.shift();
        
        let list = (hasFixeds)
            ? this.separateFixedPrices(promoPrices, fixedPrices, numRows, numCols)
            : promoPrices;

        for (let i in list)
        {
            let product = list[i];

            if(i >= numRows * numCols)
            {
                let main = (i % 30 == 0)
                    ? this.createPage()
                    : this.flyerContent.querySelector('main:last-child');

                flyerList = main.querySelector('.flyerList');
            }

            flyerList.appendChild(
                this.createProductExhibition(product, (hasFixeds))
            );
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

    /*
    function savePage()
    {
        alert('Desculpe, essa função ainda não está disponível. :(')
    }
    */
}

module.exports = XlsxHandle;