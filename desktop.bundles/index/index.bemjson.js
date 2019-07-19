module.exports = {
	block: 'page',
	title: 'Index',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		// { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'project-default', space: 'default', size: 'default', gap: 'small'}
	},
	content: [
        {
            block: 'layout',
            content: [
                require('../../content.blocks/header/header.bemjson.js')('switcher'),
                {
                    block: 'section',
                    mods: { 'indent-b': 'xxl' },
                    content: [
                        {
                            block: 'layout',
                            elem: 'container',
                            elemMods: { align: 'center', size: 'm'},
                            content: [
                                {                            
                                    block: 'grid',
                                    mods: { 'm-columns': 10, 'col-gap': 'full', 'row-gap': 'full' },
                                    content: [
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 5 },
                                            content: [
                                                require('../../content.blocks/payment/payment.bemjson.js')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 5 },
                                            content: [                                        
                                                require('../../content.blocks/warning/warning.bemjson.js'),
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'section',
                    mods: { 'indent-b': 'xxxxl' },
                    content: [
                        {
                            block: 'layout',
                            elem: 'container',
                            elemMods: { align: 'center', size: 'm'},
                            content: [
                                {                            
                                    block: 'grid',
                                    mods: { 'm-columns': 10, 'col-gap': 'half', 'row-gap': 'full' },
                                    content: [
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 2 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-default')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 2 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-default')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 2 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-default')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 2 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-default')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 2 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-default')
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    block: 'section',
                    mods: { 'indent-b': 'xxl' },
                    content: [
                        {
                            block: 'layout',
                            elem: 'container',
                            elemMods: { align: 'center', size: 'm'},
                            content:
                                [
                                    {                            
                                        block: 'grid',
                                        mods: { 'm-columns': 12,'col-gap': 'full', 'row-gap': 'full' },
                                        content: [
                                            {
                                                block: 'grid',
                                                elem: 'fraction',
                                                elemMods: { 'm-col': 8 },
                                                content: [
                                                    require('../../content.blocks/history/history.bemjson.js')
                                                ]
                                            },
                                            {
                                                block: 'grid',
                                                elem: 'fraction',
                                                elemMods: { 'm-col': 4 },
                                                content: [                                        
                                                    require('../../content.blocks/commercial/commercial.bemjson.js'),
                                                ]
                                            }
                                        ]
                                    }
                            
                                ]
                        }
                    ]
                },
                require('../../content.blocks/footer/footer.bemjson.js'),
            ]
 
        }       
	]
};
