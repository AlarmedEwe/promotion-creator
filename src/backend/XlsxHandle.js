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

    createFlyer(list)
    {
        list.shift();
        let flyerList = this.flyerContent.getElementById('flyerList');

        for (let i in list)
        {
            let product = list[i];
            if(i < 30)
            {
                let div = document.createElement('div');
                div.innerHTML = `<img src="${product.D}" alt="${product.A}"/>
                    <div>
                        <p>${product.A.toLowerCase()} ${product.B}</p>
                        <div class="price">R$ ${product.C.toFixed(2).replace('.',',')}</div>
                    </div>`;
                flyerList.appendChild(div);
            } else 
            {
                if (i % 30 == 0)
                {
                    let page    = document.createElement('main'),
                        header  = document.createElement('div'),
                        main    = document.createElement('div'),
                        footer  = document.createElement('div');

                    header.classList.add('flyerHeader');
                    main.classList.add('flyerMain');
                    footer.classList.add('flyerFooter');

                    header.innerHTML    = '<h2>Visite nosso portal: portal.gramense.com.br</h2>';
                    main.innerHTML      = '<div class="flyerAlert"><p>IMAGENS DE CARÁTER ILUSTRATIVO. RESERVAMOS O DIREITO DE CORRIGIR EVENTUAIS ERROS GRÁFICOS.</p></div>';
                    footer.innerHTML    = '<p>VALIDADE 26 E 27 DE NOVEMBRO DE 2020 OU ENQUANTO DURAR O ESTOQUE.</p>';

                    page.appendChild(header);
                    page.appendChild(main);
                    page.appendChild(footer);
                    this.flyerContent.body.appendChild(page);
                }
            }
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