module.exports = {
    block: 'footer',
    content: [
        {
            block: 'footer',
            elem: 'content',
            content: [
                {
                    block: 'text',
                    mods: { view: 'primary', size: 'l' },
                    content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                    ]
                },
                {
                    block: 'text',
                    mods: { view: 'primary', size: 'l' },
                    content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                    ]
                },
            ]
        },
        
    ]
};


// Вложенные контентные блоки

//     text text_view_primary text_size_l

// Элементы без примиксованных блоков паттернов

//     footer__content (содержимое блока)
