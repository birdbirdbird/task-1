module.exports = function(brand) {
    return {
        elem: 'transaction',
        mix: {
            block: 'list',
            elem: 'item',
            elemMods: { border: 'bottom', 'space-a': 'l'} 
        },
        content: [
            {
                elem: 'show',
                mix: [
                    {
                        block: 'list',
                        elem: 'item',
                        elemMods: { 'vertical-align': 'center', 'indent-t': 'm'}
                    },
                    {
                        block: 'e-accordion',
                        js: true,
                        elem: 'short'
                    }
                ],
                content: [
                    {
                        elem: 'details',
                        content: [
                            {
                                elem: 'time',
                                content: [
                                    {
                                        block: 'text',
                                        mods: { view: 'ghost', size: 's'},
                                        content: [
                                            {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                            }
                                        ]
                                    },
                                    {
                                        block: 'text',
                                        mods: { view: 'ghost', size: 's'},
                                        content: [
                                            {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'destination',
                                mix: {
                                    block: 'icon-plus',
                                    mods: { 'vertical-align' : 'center' }
                                },
                                content: [
                                    {
                                        elem: 'pic',
                                        mix: {
                                            block: 'icon-plus',
                                            elem: 'icon',
                                            elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                        },
                                        content: [
                                            { 
                                                block: 'brand-logo',
                                                mods: { name: brand, size: 'm' } 
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'label',
                                        mix: {
                                            block: 'icon-plus',
                                            elem: 'block'
                                        },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { view: 'primary', size : 'l' },
                                                content: [
                                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        block: 'text',
                        mods: { view: 'primary', size : 'l' },
                        content: [
                            { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                        ]
                    }
                ]
            },
            {
                elem: 'hide',
                mix: [
                    {
                        block: 'e-accordion',
                        js: true,
                        elem: 'more',
                        // elemMods: { view: 'default' }
                    },
                    {
                        block: 'list',
                        elem: 'item',
                        elemMods: { 'indent-t': 'm' }
                    }
                ],
                content: [
                    {
                        elem: 'description',
                        mix: { 
                            block: 'list',
                            elem: 'item',
                            elemMods: { 'indent-b': 'm' }
                        },
                        content: [
                            {
                                block: 'text',
                                mods: { view: 'primary', size : 'l' },
                                content: [
                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                    { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                ]
                            },
                            {
                                block: 'text',
                                mods: { view: 'primary', size : 'l' },
                                content: [
                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                    { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                ]
                            },                              
                        ]
                    },
                    {
                        elem: 'actions',
                        mix: {
                            block: 'list',
                            elem: 'item',
                            elemMods: { distribute: 'between', 'indent-b': 'm' }
                        },
                        content: [ 
                            {
                                block: 'text',
                                mods: { view: 'primary', size : 'l' },
                                content: [
                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                ]
                            },
                            {
                                block: 'text',
                                mods: { view: 'primary', size : 'l' },
                                content: [
                                    { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
}