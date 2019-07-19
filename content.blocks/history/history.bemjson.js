module.exports = {
    block: 'history',
    mix: {
        block: 'list',
        mods: { border: 'all', view: 'default' }
    },
    content: [
        require('../transaction/transaction.bemjson.js')('yota'),
        require('../transaction/transaction.bemjson.js')('mts'),
        require('../transaction/transaction.bemjson.js')('kcell'),
        require('../transaction/transaction.bemjson.js')('megafon'),
    ]
};
