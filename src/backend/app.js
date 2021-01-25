let Loader      = require('./loader'),
    onChanges = require('./onChanges');

function Start()
{
    Loader();
    onChanges();
}

module.exports = Start();