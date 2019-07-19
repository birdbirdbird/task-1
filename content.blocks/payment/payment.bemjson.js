module.exports = {
    block: 'payment',
    mix: {
        block: 'form',
        mods: { border: 'all' },
    },
        content: [
            { 
                elem: 'header',
                mix: {
                    block: 'form',
                    elem: 'item',
                    elemMods: { 'space-v': 'xxl', 'space-h': 'xl', border: 'bottom' }
                },
                content: [
                    {
                        block: 'text',
                        mods: { view: 'primary', size: 'xxl' },
                        content: [
                            {
                                elem: 'word',
                                elemMods: { 'width': 'l' }
                            }
                        ]
                    }
                ]
            },
            {  
                elem: 'content',
                mix: {
                    block: 'form',
                    elem: 'item',
                    elemMods: { 'space-v': 'xxxl', 'space-h': 'xl', border: 'bottom' }
                },
                content: [
                    {
                        block: 'form',
                        elem: 'item',
                        elemMods: { 'indent-b': 'xl', 'distribute': 'between', 'vertical-align': 'center' },
                        content: [
                            {
                                block: 'form',
                                elem: 'label',
                                elemMods: { width: 'default' },
                                content: [
                                    {
                                        block: 'text',
                                        mods: { view: 'primary', size: 'l' },
                                        content: [
                                            {
                                                elem: 'word',
                                                elemMods: { 'width': 'l' }
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                block: 'form',
                                elem: 'control',
                                content: [
                                    {
                                        block: 'input',
                                        mods: { size: 'l' }							
                                    }
                                ]
                            }
                            
                        ]
                    },
                    {
                        block: 'form',
                        elem: 'item',
                        elemMods: { 'indent-b': 'xl', 'distribute': 'between', 'vertical-align': 'center' },
                        content: [
                            {
                                block: 'form',
                                elem: 'label',
                                elemMods: { width: 'default' },
                                content: [
                                    {
                                        block: 'text',
                                        mods: { view: 'primary', size: 'l' },
                                        content: [
                                            {
                                                elem: 'word',
                                                elemMods: { 'width': 'l' }
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                block: 'form',
                                elem: 'control',
                                content: [
                                    {
                                        block: 'input',
                                        mods: { size: 'l' }							
                                    }
                                ]
                            }
                            
                        ]
                    },  
                ]
            },
            {  
                elem: 'footer',
                mix: {
                    block: 'form',
                    elem: 'item',
                    elemMods: { distribute: 'between', 'space-v': 'l', 'space-h': 'xl', border: 'bottom', 'vertical-align' : 'center' }
                },
                content: [
                    {
                        block: 'text',
                        mods: { view: 'primary', size: 'l' },
                        content: [
                            {
                                elem: 'word',
                                elemMods: { 'width': 'l' }
                            }
                        ]
                    },
                    {
                        block: 'button',
                        mods: { size: 'l' }
                    }
                ]
            }
        ]
};
