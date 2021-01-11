'use strict';
const excelToJson = require('convert-excel-to-json');

xlsFile.onchange = () => {
    console.log(xlsFile.files[0].path);
    let result = excelToJson({
        sourceFile: xlsFile.files[0].path
    });

    // console.log(result);
    // console.log(JSON.stringify(result[Object.keys(result)[0]]));

    flyer.contentDocument.querySelector('#flyerHeader h1').innerHTML = 'Texto';
    createFlyer(result[Object.keys(result)[0]]);
};

function createFlyer(list)
{
    // let list    = [{"A":"FBS_DESCRICAO","B":"PTABELA","C":"DIRFOTOPROD"},{"A":"ABSORVENTE INTIMUS GEL SUAVE S/ABAS","B":2.69,"C":"P:\\IMG_PROD\\128759.jpg"},{"A":"ABSORVENTE INTIMUS INTERNO MEDIO","B":5.67,"C":"P:\\IMG_PROD\\147956.jpg"},{"A":"ABSORVENTE NATURALMENTE DAILY","B":4.99,"C":"P:\\IMG_PROD\\307970.jpg"},{"A":"ABSORVENTE SEMPRE LIVRE ESPECIAL SUA ABAS","B":6.29,"C":"P:\\IMG_PROD\\303745.jpg"},{"A":"APARELHO BIC SENSITIVE SHAVER","B":4.55,"C":"P:\\IMG_PROD\\308265.jpg"},{"A":"ENXAGUANTE BUCAL LISTERINE COOL MINT","B":9.35,"C":"P:\\IMG_PROD\\493.jpg"},{"A":"CURATIVO BAND-AID TRANSP","B":3.99,"C":"P:\\IMG_PROD\\22780.jpg"},{"A":"DESODORANTE AEROSOL GIOVANNA BABY BLUE","B":7.49,"C":"P:\\IMG_PROD\\302311.jpg"},{"A":"DESODORANTE AEROSOL GIOVANNA BABY CANDY","B":7.49,"C":"P:\\IMG_PROD\\310392.jpg"},{"A":"DESODORANTE AEROSOL GIOVANNA BABY ROSA","B":7.49,"C":"P:\\IMG_PROD\\302312.jpg"},{"A":"ABSORVENTE INTIMUS GEL JUMBO SUAVE C/ABAS","B":4.99,"C":"P:\\IMG_PROD\\310911.jpg"},{"A":"LOCAO NIVEA BODY MILK","B":7.78,"C":"P:\\IMG_PROD\\29076.jpg"},{"A":"ALGODAO APOLO BOLA","B":1.89,"C":"P:\\IMG_PROD\\307112.jpg"},{"A":"SABONETE INFANTIL JOHNSON & JOHNSON TRADICIONAL","B":2.89,"C":"P:\\IMG_PROD\\36927.jpg"},{"A":"TINTURA MAXTON KIT PRATIC 1.0 PRETO","B":7.69,"C":"P:\\IMG_PROD\\306271.jpg"},{"A":"TINTURA MAXTON KIT PRATIC 4.0 CAST NAT","B":7.69,"C":"P:\\IMG_PROD\\305673.jpg"},{"A":"DESODORANTE AEROSOL GIOVANNA BABY CHERRY","B":7.49,"C":"P:\\IMG_PROD\\310389.jpg"},{"A":"OLEO EPILE ROSA MOSQUETA","B":16.89,"C":"P:\\IMG_PROD\\100560.jpg"},{"A":"TENYS-PE BARUEL PO ORIGINAL","B":5.99,"C":"P:\\IMG_PROD\\33901.jpg"},{"A":"DESODORANTE CREME HERBISSIMO ACTION","B":2.69,"C":"P:\\IMG_PROD\\146530.jpg"},{"A":"LEITE ROSAS","B":2.17,"C":"P:\\IMG_PROD\\13056.jpg"},{"A":"POLVILHO GRANADO","B":9.39,"C":"P:\\IMG_PROD\\2348.jpg"},{"A":"TINTURA BEAUTY COLOR KIT 2.11 PRETO AZULADO","B":9.5,"C":"P:\\IMG_PROD\\305547.jpg"},{"A":"TINTURA MAXTON KIT PRATIC 5.0 CAST CLARO","B":7.69,"C":"P:\\IMG_PROD\\305682.jpg"},{"A":"TALCO INFANTIL TRA LA LA BABY SUAVE - GTS CR ASSADURA","B":6.85,"C":"P:\\IMG_PROD\\311130.jpg"},{"A":"DESODORANTE AEROSOL GIOVANNA BABY LILAC","B":7.49,"C":"P:\\IMG_PROD\\310385.jpg"},{"A":"HASTES APONETE -APOLO","B":1.65,"C":"P:\\IMG_PROD\\147257.jpg"},{"A":"TINTURA BEAUTY COLOR KIT 3.0 CAST ESC","B":9.5,"C":"P:\\IMG_PROD\\301367.jpg"},{"A":"TINTURA BEAUTY COLOR KIT 6.0 LOU ESCURO","B":9.5,"C":"P:\\IMG_PROD\\301370.jpg"},{"A":"TINTURA BEAUTY COLOR KIT 7.0 LOU NATURAL","B":9.5,"C":"P:\\IMG_PROD\\301371.jpg"}];
    list.shift();
    let flyerList = flyer.contentDocument.getElementById('flyerList');
    console.log(list);

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