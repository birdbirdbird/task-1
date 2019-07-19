module.exports = {
    block: 'subscription',
    mix: [
        {
            block: 'card', 
            mods: { view: 'default' }
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
                elemMods: { 'space-a': 'xl' }
            },
            content: [
                {
                    elem: 'title',
                    content: [
                        {
                            block: 'text',
                            mods: { view: 'primary', size: 'xxl' },
                            content: [
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                            ]
                        }
                    ]
                },
                {
                    elem: 'advantages',
                    mix: {
                        block: 'list'
                    },
                    content: [
                        {
                            elem: 'advantage',
                            mix: { 
                                block: 'list',
                                elem: 'item',
                                elemMods: { 'space-b': 's' }
                            },
                            content: [
                                {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'advantage',
                            mix: { 
                                block: 'list',
                                elem: 'item',
                                elemMods: { 'space-b': 's' }
                            },
                            content: [
                                {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'advantage',
                            mix: { 
                                block: 'list',
                                elem: 'item',
                                elemMods: { 'space-b': 's' }
                            },
                            content: [
                                {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'advantage',
                            mix: { 
                                block: 'list',
                                elem: 'item',
                                elemMods: { 'space-b': 's' }
                            },
                            content: [
                                {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                    ]
                                }
                            ]
                        },  
                        {
                            elem: 'advantage',
                            mix: { 
                                block: 'list',
                                elem: 'item',
                                elemMods: { 'space-b': 's' }
                            },
                            content: [
                                {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                    ]
                                }
                            ]
                        } 
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            mix: [ 
                { 
                    block: 'card',
                    elem: 'footer',
                    elemMods: { 'space-a': 'xl' }
                },
                {
                    block: 'list'
                }
            ],
            content: [
                {
                    elem: 'control',
                    mix: {
                        block: 'list',
                        elem: 'item',
                        elemMods: { 'indent-b': 's' }
                    },
                    content: [
                        {
                            block: 'input',
                            mods: { size: 'l' }
                        },
                        {
                            block: 'button',
                            mods: { size: 'l', width: 'full' }
                        }
                    ]
                }
            ]
        }
    ]
};

// Примиксованные блоки паттернов

//     subscribtion (card_view_default theme theme_color_project-brand)
//     subscribtion__info (card__content_space-a_xl)
//     subscribtion__advantages (list)
//     subscribtion__advantage (list__item list__item_space-b_s)
//     subscribtion__footer (card__footer_space-a_xl list)
//     subscribtion__control (list__item_indent-b_s)

// Элементы без примиксованных блоков паттернов

//     subscribtion__title (заголовок блока)

// Вложенные контентные блоки

//     text text_view_primary text_size_xxl
//     text text_view_primary text_size_l
//     input input_size_l
//     button button_size_l button_width_full
