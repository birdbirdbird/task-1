module.exports = {
    block: 'warning',
    mix: [
        {
            block: 'informer',
            mods: { border: 'all', view: 'default' }
        },
        {
            block: 'theme',
            mods: { color: 'project-warning' }
        }
    ],
    content: [
        {
            elem: 'content',
            mix: {
                block: 'informer',
                elem: 'content',
                elemMods: { distribute: 'center', 'space-a': 'xxl'} 
            },
            content: [
                {
                    block: 'placeholder',
                    mods: { view: 'primary', size: 'm' }
                },
                {
                    block: 'text',
                    mods: { view: 'primary', size: 'xl' },
                    content: [
                        { elem: 'word', elemMods: { width: 's'}},
                        { elem: 'word', elemMods: { width: 'l'}},
                        { elem: 'word', elemMods: { width: 'm'}},
                        { elem: 'word', elemMods: { width: 'm'}},
                        { elem: 'word', elemMods: { width: 's'}},
                        { elem: 'word', elemMods: { width: 'm'}},
                        { elem: 'word', elemMods: { width: 'l'}},
                        { elem: 'word', elemMods: { width: 's'}},
                        { elem: 'word', elemMods: { width: 'm'}}
                    ]
                }
            ]
        },
        {
            elem: 'button-wrapper',
            mix: {
                block: 'informer',
                elem: 'action',
                elemMods: { distribute: 'center', 'space-a': 'xxl'} 
            },
            content: [
                {
                    block: 'button',
                    mods: { size: 'l'} 
                }
            ]
        }
    ]
}
