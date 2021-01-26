let Loader      = require('./loader'),
    onChanges = require('./onChanges');

function Start()
{
    Loader()
    .then(() => {
        onChanges();
    });
}

module.exports = Start();