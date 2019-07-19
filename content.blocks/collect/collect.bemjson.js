module.exports = {
    block: 'collect',
    mix: [
        {
            block: 'card', 
            mods: { border: 'all', view: 'default' }
        },
        { 
            block: 'theme', 
            mods: { color: 'project-inverse' } 
        }
    ],
    content: [
        {
            elem: 'image',
            mix: { 
                block: 'card',
                elem: 'content',
            },
            content: [
                {
                    elem: 'image',
                    mix: { block: 'image' }
                },
                {
                    elem: 'progress',
                    content: [
                        {
                            elem: 'done',
                            elemMods: { size: 'two-third'}
                        }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            mix: { 
                block: 'card',
                elem: 'footer',
                elemMods: { 'space-a': 'l' }
            },
            content: [
                {
                    block: 'text',
                    mods: { view: 'primary', size: 'l' },
                    content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                    ]
                },
                {
                    block: 'text',
                    mods: { view: 'secondary', size: 'm' },
                    content: [
                        require('../../libs/parse.js')('s + l + m + s + s + l + m + m + l + l + s')
                    ]
                }
            ]
        }
    ]
};

// Примиксованные блоки паттернов

//     collect (card_view_default card_border_all theme theme_color_project-inverse)
//     collect__image (card__content theme_color_project-default)
//     collect__footer (card__footer card__footer_space-a_l)

// Элементы без примиксованных блоков паттернов

//     collect__progress (контейнер прогресс-бара)
//     collect__done (полоса прогресс-бара)

// Вложенные контентные блоки

//     text text_size_l text_view_primary
//     text text_size_m text_view_secondary
//     image
