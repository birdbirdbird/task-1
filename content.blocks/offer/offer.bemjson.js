module.exports = {
    block: 'offer',
    mix: [
        {
            block: 'card', 
            mods: { border: 'all', view: 'default' }
        },
        { 
            block: 'theme', 
            mods: { color: 'megafon-brand' } 
        }
    ],
    content: [
        {
            elem: 'partner',
            mix: { 
                block: 'card',
                elem: 'content',
                elemMods: { 'space-a': 'xl' }
            },
            content: [
                {
                    block: 'brand-logo',
                    mods: { name: 'megafon', size: 'm' }
                }
            ]
        },
        {
            elem: 'footer',
            mix: { 
                block: 'card',
                elem: 'footer',
                elemMods: { 'space-a': 'xl' }
            },
            content: [
                {
                    elem: 'name',
                    content: [
                        {
                            block: 'text',
                            mods: { view: 'ghost', size: 's' },
                            content: [
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                            ]
                        }
                    ]
                },
                {
                    elem: 'sale',
                    content: [
                        {
                            block: 'text',
                            mods: { view: 'primary', size: 'xxl' },
                            content: [
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                            ]
                        }
                    ]
                },
                {
                    block: 'text',
                    mods: { view: 'secondary', size: 'm' },
                    content: [
                        require('../../libs/parse.js')('l + s + m + l + s + m + s+ l')                        
                    ]
                }
            ]
        }
    ]

};


// Смысловой блок: offer

// Примиксованные блоки паттернов

//     offer (theme_color_megafon-brand card card_view_default)
//     offer__partner (card__content_space-a_xl)
//     offer__footer (card__footer_space-a_xl)

// Элементы без примиксованных блоков паттернов

//     offer__name (первая строка текста)
//     offer__sale (вторая строка текста)

// Вложенные контентные блоки

//     text text_view_ghost text_size_s
//     text text_view_primary text_size_xxl
//     text text_view_secondary text_size_m
//     brand-logo brand-logo_name_megafon brand-logo_size_m
