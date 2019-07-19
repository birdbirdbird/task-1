module.exports = {
	block: 'page',
	title: 'Product',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'product.min.css' },
		// { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'product.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'project-default', space: 'default', size: 'default', gap: 'small'}
	},
	content: [
        {
            block: 'layout',
            content: [
                require('../../content.blocks/header/header.bemjson.js')(),
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
                                            elemMods: { 'm-col': 8 },
                                            content: [
												{
													block: 'text',
													mods: { type: 'h1', view: 'primary', size: 'xxl' },
													content: [
														{ block: 'text', elem: 'word', elemMods: { width: 'l' }}
													]
												},
												{
													block: 'text',
													mods: { view: 'primary', size: 'm' },
													content: [
														require('../../libs/parse.js')('l + m + m + s + m + m + m + s + m + m + m + m + s + m + l + l + l + s + l + m + m + s + m + m + m + m + s + m + l + l + l + s + l + m + m + s + m + m + s + m + s + m + l + l + l + s + l + m + m + s + m + m + m + m + s + m + l + l + s + s + l + m + m + s + m + m + m + m + m + m + l + s + l + s + l + m + m + s + m + m + l + m + s + m + l + l + m + m + s + m + m + m + m + s + m + l + l + l + s + l + m + m + s + m + m + m + m + s + l + m'),
													]
												},
												{
													block: 'text',
													mods: { type: 'h2', view: 'primary', size: 'xl' },
													content: [
														{ block: 'text', elem: 'word', elemMods: { width: 'l' }}
													]
												},
												{
													block: 'text',
													mods: { view: 'primary', size: 'm' },
													content: [
														require('../../libs/parse.js')('m + l + l + l + s + l + m + m + s + m + m + m + s + m + m + m + m + s + m + l + l + l + s + l + m + m + s + m + m + m + m + s'),
													]
												}
											]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 4 },
                                            content: [                                        
                                                require('../../content.blocks/cover/cover.bemjson.js'),
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
											elemMods: { 'm-col': 5 },
											mix: { block: 'form', elem: 'item', elemMods: { 'indent-b': 'xxl' }  },
                                            content: [
                                                {
													block: 'text',
													mods: {  view: 'primary', size: 'xxl' },
													content: [
														{ block: 'text', elem: 'word', elemMods: { width: 'l' }},
														{ block: 'text', elem: 'word', elemMods: { width: 'l' }}
													]
												},
                                            ]
										},
									]
								},
                                {                            
                                    block: 'grid',
                                    mods: { 'm-columns': 12, 'col-gap': 'half', 'row-gap': 'half' },
                                    content: [
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-inverse')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-inverse')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-inverse')
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'fraction',
                                            elemMods: { 'm-col': 3 },
                                            content: [
                                                require('../../content.blocks/product/product.bemjson.js')('project-inverse')
                                            ]
                                        }
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
