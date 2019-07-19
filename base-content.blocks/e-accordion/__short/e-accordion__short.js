modules.define('e-accordion__short', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    this.bindTo(this.elem('short'), 'click', function() {
                        // this.elem('more').setMod('view', 'default');
                        alert('hello')
                    });
                }
            }
        }
    }))
})

