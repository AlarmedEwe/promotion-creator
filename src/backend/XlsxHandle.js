'use strict';
const excelToJson = require('convert-excel-to-json');

send.onclick = () => {
    console.log(xlsFile.files[0].path);
    let result = excelToJson({
        sourceFile: xlsFile.files[0].path
    });

    console.log(result);
    console.log(JSON.stringify(result[Object.keys(result)[0]]));
};