module.exports = function(switcher) { 
    if (switcher) { 
        return {
            block: 'header',
            content: [
                {
                    block: 'header',
                    elem: 'content',
                    content: [
                        {
                            block: 'header',
                            elem: 'logo'
                        },
                        require('../onoffswitch/onoffswitch.bemjson.js') 
                    ]
                } 
            ]
        }
    } else {
        return {
            block: 'header',
            content: [
                {
                    block: 'header',
                    elem: 'content',
                    content: [
                        {
                            block: 'header',
                            elem: 'logo'
                        }
                    ]
                },
                
            ]
        }
    }
};




// Содержит в себе переключатель темы.

// Элементы без примиксованных блоков паттернов

//     header__content (содержимое блока)
//     header__logo (логотип слева)
