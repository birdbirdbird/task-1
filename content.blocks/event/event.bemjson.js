module.exports = function(logo) { 
    return {
        block: 'event',
        mix: [
            {
                block: 'card', 
                mods: { view: 'default' }
            },
            { 
                block: 'theme', 
                mods: { color: 'project-inverse' } 
            }
        ],
        content: [
            {
                elem: 'content',
                mix: { 
                    block: 'card',
                    elem: 'content',
                    elemMods: { 'vertical-align': 'center', 'distribute': 'center', 'space-a': 'xxl' }
                }, 
                content: [
                    {
                        elem: 'preview',
                        content: [
                            {
                                elem: 'speaker',
                                content: [
                                    {
                                        block: 'avatar',
                                        mods: { size: 'm' } 
                                    }
                                ]
                            },
                            {
                                block: 'brand-logo',
                                mods: { name: logo, size: 'm' }
                            }
                        ]
                    },
                    {
                        elem: 'title',
                        content: [
                            {
                                block: 'text',
                                mods: { view: 'primary', size: 'xxl', align: 'center' },
                                content: [
                                    { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                ]
                            } 
                        ] 
                    },
                    {
                        elem: 'description',
                        content: [
                            {
                                block: 'text',
                                mods: { view: 'primary', size: 'l', align: 'center' },
                                content: [
                                    require('../../libs/parse.js')('l + l + l + l + l + l + l + l')  
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
                        elemMods: { 'vertical-align': 'center', 'distribute': 'center', 'space-a': 'xxl' }
                    } 
                ],
                content: [
                    {
                        block: 'text',
                        mods: { view: 'link', size: 'xl', align: 'center' },
                        content: [
                            { block: 'text', elem: 'word', elemMods: { width: 's' } },
                            { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        ]
                    }
                ]
            }
        ]
    }
};

// Примиксованные блоки паттернов

//     event (card_view_default theme_color_project-inverse)
//     event__content (card__content_vertical-align_center card__content_distribute_center card__content_space-a_xxl)
//     event__footer (card__footer_vertical-align_center card__footer_distribute_center card__footer_space-a_xxl)

// Элементы без примиксованных блоков паттернов

//     event__preview (контейнер для изображений)
//     event__speaker (левое изображение в блоке)
//     event__title (заголовок события)
//     event__description (описание события)

// Вложенные контентные блоки

//     avatar avatar_size_m
//     brand-logo brand-logo_name_mts/brand-logo_name_mts brand-logo_size_m
//     text text_view_primary text_size_xxl text_align_center
//     text text_view_primary text_size_l text_align_center
//     text text_view_link text_size_xl text_align_center
