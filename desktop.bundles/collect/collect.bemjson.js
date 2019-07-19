module.exports = {
	block: 'page',
	title: 'Collect',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'collect.min.css' },
		// { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'collect.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'project-default', space: 'default', size: 'default', gap: 'small'}
	},
	content: [
        {
            block: 'layout',
            content: [
                require('../../content.blocks/header/header.bemjson.js')(false),
                {
                    block: 'section',
                    mods: { 'indent-b': 'xxl', 'space-v': 'xxxxl' },
                    mix: { 
						block: 'theme',
						mods: { color: 'project-inverse' }
					},
                    content: [
                        {
                            block: 'layout',
                            elem: 'container',
                            elemMods: { align: 'center', size: 'm'},
                            content: [
                                {                            
                                    block: 'grid',
                                    mods: { 'm-columns': 12, 'col-gap': 'half', 'row-gap': 'half' },
                                    content: [
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/collect/collect.bemjson.js')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/collect/collect.bemjson.js')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/collect/collect.bemjson.js')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/collect/collect.bemjson.js')
                                            ]
                                        },
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
                                    mods: { 'm-columns': 12, 'col-gap': 'full', 'row-gap': 'full' },
                                    content: [
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 5 },
                                            content: [
                                                require('../../content.blocks/articles/articles.bemjson.js')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/offer/offer.bemjson.js')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 4 },
                                            content: [
                                                require('../../content.blocks/subscription/subscription.bemjson.js')
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },                
                require('../../content.blocks/footer/footer.bemjson.js'),
            ]
 
        }       
	]
};
