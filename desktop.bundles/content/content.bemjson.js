module.exports = {
	block: 'page',
	title: 'Content',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'content.min.css' },
		// { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'content.min.js' }],
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
					// mods: { 'indent-b': 'xxxxl' },
					content: [
                        {	
							block: 'layout',
							elem: 'container',
							elemMods: { align: 'center', size: 's'},
							content: [
                                {    
									block: 'text',
									mods: {  type: 'h1', view: 'primary', size: 'xxl' },
									content: [
										{ block: 'text', elem: 'word', elemMods: { width: 'l' }},
										{ block: 'text', elem: 'word', elemMods: { width: 'l' }},
									]
								},
								{    
									block: 'text',
									mods: {  type: 'p', view: 'primary', size: 'l' },
									content: [
										require('../../libs/parse.js')('l + s + l + m + l + l + s + l + s + m + l + l + s + l + l + m + l + l + l + l + l + m + m + l + l + l + l + l + l + s + m + l + s + l')
										
									]
								},    
								{    
									block: 'text',
									mods: {  type: 'p', view: 'primary', size: 'l' },
									content: [
										require('../../libs/parse.js')('l + s + l + m + l + l + s + l + s + m + l + l + s + l + l + m + l + l + l + l + l + m + m + l + l + l + l + l + l + s + m + l + s + l')
										
									]
								},             
							]
						}
					]
				},
				{
					block: 'section',
					// mods: { 'indent-b': 'xxl', 'space-v': 'xxxxl' },
					content: [
                        {	
							block: 'layout',
							elem: 'container',
							elemMods: { align: 'center', size: 'm'},
							content: [
								{
									block: 'grid',
									mods: { 'm-columns': 10, 'col-gap': 'half', 'row-gap': 'half' },
									content: [
										{
                                            block: 'grid',
                                            elem: 'fraction',
											elemMods: { 'm-col': 5 },
											mix: { block: 'form', elem: 'item', elemMods: { 'indent-b': 'xxl' }  },
                                            content: [
												require('../../content.blocks/event/event.bemjson.js')('mts')
                                            ]
										},
										{
                                            block: 'grid',
                                            elem: 'fraction',
											elemMods: { 'm-col': 5 },
											mix: { block: 'form', elem: 'item', elemMods: { 'indent-b': 'xxl' }  },
                                            content: [
												require('../../content.blocks/event/event.bemjson.js')('yota')
                                            ]
										},

									]
								},
                                
                            ]
                        },
                    ]
				},
				{
					block: 'section',
					// mods: { 'indent-b': 'xxxxl' },
					content: [
                        {	
							block: 'layout',
							elem: 'container',
							elemMods: { align: 'center', size: 's'},
							content: [
                                {    
									block: 'text',
									mods: {  type: 'h2', view: 'primary', size: 'xxl' },
									content: [
										{ block: 'text', elem: 'word', elemMods: { width: 'm' }},
										{ block: 'text', elem: 'word', elemMods: { width: 'm' }},
									]
								},
								{    
									block: 'text',
									mods: {  type: 'p', view: 'primary', size: 'l' },
									content: [
										require('../../libs/parse.js')('l + s + s + m + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + s + l + m + m + s + m + m + s + m + s + m + l + l + l + s + l + m + m + s + m + m + m + m + s + m + l + l + s + s + l + m + m + s + m + m + m + m')
										
									]
								}, 
								{    
									block: 'text',
									mods: {  type: 'h3', view: 'primary', size: 'xxl' },
									content: [
										{ block: 'text', elem: 'word', elemMods: { width: 'm' }},
										{ block: 'text', elem: 'word', elemMods: { width: 'l' }},
									]
								},   
								{    
									block: 'text',
									mods: {  type: 'p', view: 'primary', size: 'l' },
									content: [
										require('../../libs/parse.js')('l + s + s + m + l + l + l + l + l + l + l + l + l + l + l + l + l + l + m + l + l + s + s + s + m + m + s + m + m + s + m + s + l + l + l + l + s + l + m + m + s + m + m + m + m + m + m + l + l + s + s + l + m + m + s + m + l + m + m')
										
									]
								},             
							]
						}
					]
				},
                require('../../content.blocks/footer/footer.bemjson.js'),
            ]
        }       
	]
};
