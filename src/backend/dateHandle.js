class DateHandle
{
    now     = new Date;
    months  = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO',
                'AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'];

    constructor()
    {
        let month = this.now.getMonth() + 1,
            day   = this.now.getDate()  + 1;
        month = (month < 10) ? '0' + month : month;
        day   = (day   < 10) ? '0' + day   : day;

        dtIni.value = `${this.now.getFullYear()}-${month}-${day}`;
        dtFin.value = `${this.now.getFullYear()}-${month}-${day + 1}`;
    }

    writeFooter(firstDay, lastDay)
    {
        let dateMsg;

        firstDay = firstDay.split('-');
        lastDay  = lastDay.split('-');

        firstDay.forEach(function(e,i,a) { a[i] = parseInt(a[i]); });
        lastDay.forEach(function(e,i,a) { a[i] = parseInt(a[i]); });

        if (firstDay[0] == lastDay[0])
        {
            if (firstDay[1] == lastDay[1])
            {
                if (firstDay[2] == lastDay[2])
                    dateMsg = `${firstDay[2]} `;
                else if (firstDay[2] == lastDay[2] - 1)
                    dateMsg = `${firstDay[2]} E ${lastDay[2]} `;
                else
                    dateMsg = `${firstDay[2]} A ${lastDay[2]} `;
                dateMsg += `DE ${this.months[firstDay[1] - 1]} `;
            } else {
                dateMsg = `${firstDay[2]} DE ${this.months[firstDay[1] - 1]} A `+
                    `${lastDay[2]} DE ${this.months[lastDay[1] - 1]} `;
            }
            dateMsg += `DE ${firstDay[0]}`;
        } else {
            dateMsg = `${firstDay[2]} DE ${this.months[firstDay[1] - 1]} DE ${firstDay[0]} `+
                `A ${lastDay[2]} DE ${this.months[lastDay[1] - 1]} DE ${lastDay[0]}`;
        }

        setTimeout(() => {
            flyer.contentDocument.querySelectorAll('.flyerFooter p').forEach(footer => {
                footer.innerHTML = `VALIDADE ${dateMsg} OU ENQUANTO DURAR O ESTOQUE.`;
            });
        }, 1500);
    }
}

module.exports = DateHandle;