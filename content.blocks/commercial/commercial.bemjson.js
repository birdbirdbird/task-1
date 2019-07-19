module.exports = {
    block: 'commercial',
    mix: [
        {
            block: 'card', 
            mods: { border: 'all', view: 'default' }
        },
        { 
            block: 'theme', 
            mods: { color: 'project-brand' } 
        }
    ],
    content: [
        {
            elem: 'pic',
            mix: { 
                block: 'card',
                elem: 'content',
                elemMods: { 'space-a': 'xxl' }
            },
            content: [
                {
                    elem: 'image',
                    mix: { block: 'image' }
                }
            ]
        },
        {
            elem: 'info',
            mix: { 
                block: 'card',
                elem: 'footer',
                elemMods: { 'space-a': 'xxl' }
            },
            content: [
                {
                    block: 'text',
                    mods: { view: 'primary', size: 's' },
                    content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                    ]
                },
                {
                    elem: 'navigation',
                    content: [
                        { elem: 'page-button' },
                        { elem: 'page-button' },
                        { elem: 'page-button' }
                    ]
                }
            ]
        }
    ]

};
