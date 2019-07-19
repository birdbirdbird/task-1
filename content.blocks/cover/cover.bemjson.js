module.exports = {
    block: 'cover',
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
            elem: 'info',
            mix: { 
                block: 'card',
                elem: 'content',
                elemMods: { 'space-a': 'xxl' }
            },
            content: [ 
                {
                    elem: 'preview',
                    mix: { 
                        block: 'theme',
                        mods: { 'color': 'project-brand' }
                    },
                    content: [
                        {
                            elem: 'image',
                            mix: { block: 'image' }
                        }
                    ]
                },
                {
                    block: 'text',
                    mods: { view: 'primary', size: 'xxl' },
                    content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                    ]
                },
                {
                    block: 'text',
                    mods: { view: 'primary', size: 'xxl' },
                    content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            mix: { 
                block: 'card',
                elem: 'footer',
                elemMods: { 'space-a': 'xxl' }
            },
            content: [
                {
                    block: 'button',
                    mods: { size: 'l', width: 'full' }
                }
            ]
        }
    ]

};

// Примиксованные блоки паттернов

//     cover (card card_view_default theme theme_color_project-brand)
//     cover__info (card__content_space-a_xxl)
//     cover__preview (theme_color_project-brand)
//     cover__footer (card__footer_space-a_xxl)

// Вложенные контентные блоки

//     text text_view_primary text_size_xxl
//     image
