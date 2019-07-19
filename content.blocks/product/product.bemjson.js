module.exports = function(theme) {
    return {
        block: 'product',
        mix: [
            {
                block: 'card',
                mods: { border: 'all', view: 'default' }
            },
            {
                block: 'theme',
                mods: { color: theme }
            }     
        ],
        content: [
            {				
                elem: 'content',
                mix: {
                    block: 'card',
                    elem: 'content',
                    elemMods: { 'space-a': 'm' }
                },
                content: [
                    {
                        elem: 'image',
                        mix: { block: 'image' }
                    }
                ]
            },
            {
                elem: 'footer',
                mix: {
                    block: 'card',
                    elem: 'footer',
                    elemMods: { 'space-a': 'm' }
                },
                content: [
                    {
                        block: 'text',
                        mods: { view: 'primary', size: 'm' },
                        content: [
                            {
                                elem: 'word',
                                elemMods: { 'width': 'l' }
                            }
                        ]
                        
                    },
                    {
                        block: 'text',
                        mods: { view: 'primary', size: 's' },
                        content: [
                            {
                                elem: 'word',
                                elemMods: { 'width': 'm' }
                            }
                        ]
                        
                    },
                ]
            }
        ]
    }
}
