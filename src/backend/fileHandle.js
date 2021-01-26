class FileHandle
{
    now     = new Date;
    months  = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO',
                'AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'];

    constructor()
    {
        setTimeout(() => {
            flyer.contentDocument.querySelector('#flyerFooter p').innerHTML =
                // `VALIDADE ${this.now.getDate() + 1} E ${this.now.getDate() + 2} `+
                `VALIDADE ${this.now.getDate() + 2} E ${this.now.getDate() + 3} `+
                `DE ${this.months[this.now.getMonth()]} DE ${this.now.getFullYear()} OU ENQUANTO DURAR O ESTOQUE.`;
        }, 1500);
    }
    
    handleFileName (that)
    {
        document.querySelectorAll(`[for=${that.id}]`)[1].innerHTML = that.files[0].name;
    }
}

module.exports = FileHandle;