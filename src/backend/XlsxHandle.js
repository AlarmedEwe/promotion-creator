class XlsxHandle
{
    flyerContent;

    constructor()
    {
        setTimeout(() => { this.flyerContent = flyer.contentDocument; }, 1500);
    }

    setValue(variable, value)
    {
        this.flyerContent.querySelector(':root').style.setProperty(`--${variable}`,value);
    }

    createFlyer(list)
    {
        list.shift();
        let flyerList = this.flyerContent.getElementById('flyerList');

        for (let product of list)
        {
            let div = document.createElement('div');
            div.innerHTML = `<img src="${product.D}" alt="${product.A}"/>
                <div>
                    <p>${product.A.toLowerCase()} ${product.B}</p>
                    <div class="price">R$ ${product.C.toFixed(2).replace('.',',')}</div>
                </div>`;
            flyerList.appendChild(div);
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