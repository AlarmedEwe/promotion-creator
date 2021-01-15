let Loader      = require('./loader'),
    onChanges = require('./onchanges');

function Start()
{
    Loader();
    onChanges();
}

module.exports = Start();