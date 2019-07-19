var fs = require('fs'),
    path = require('path'),
    techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        postcss: require('enb-postcss/techs/enb-postcss'),
        postcssPlugins: [
            require('postcss-import')(),
            require('postcss-each'),
            require('postcss-for'),
            require('postcss-simple-vars')(),
            require('postcss-calc')(),
            require('postcss-nested'),
            require('rebem-css'),
            require('postcss-url')({ url: 'inline' }),
            require('autoprefixer')(),
            require('postcss-reporter')()
        ],

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
    },
    enbBemTechs = require('enb-bem-techs'),
    merged = require('./techs/merged'),
    levels = [
        { path: 'node_modules/bem-core/common.blocks', check: false },
        'base-theme.blocks',
        'base-layout.blocks',
        'base-patterns.blocks',
        'base-content.blocks',
        'content.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production',
        mergedBundleName = 'merged',
        pathToMargedBundle = path.join('desktop.bundles', mergedBundleName);

    fs.existsSync(pathToMargedBundle) || fs.mkdirSync(pathToMargedBundle);

    merged(config, pathToMargedBundle);

    config.nodes('*.bundles/*', function(nodeConfig) {
        var isMergedNode = path.basename(nodeConfig.getPath()) === mergedBundleName;

        isMergedNode || nodeConfig.addTechs([
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl]
        ]);

        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.postcss, {
                target: '?.css',
                oneOfSourceSuffixes: ['post.css', 'css'],
                plugins: techs.postcssPlugins
            }],

            // bemtree
            // [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                forceBaseTemplates: true,
                engineOptions : { elemJsInstances : true }
            }],

            // html
            [techs.bemjsonToHtml],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                engineOptions : { elemJsInstances : true }
            }],

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js']
            }],

            // borschik
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.min.css', '?.min.js']);
        isMergedNode || nodeConfig.addTargets(['?.html']);
    });

    // не успеваю сделать по-нормальному ¯\_(ツ)_/¯
    fs.existsSync('build') || fs.mkdirSync('build');
    fs.copyFile('desktop.bundles/merged/merged.css', 'build/style.css', (err) => {
        if (err) throw err;
      });
    fs.copyFile('desktop.bundles/merged/merged.js', 'build/script.js', (err) => {
        if (err) throw err;
      })
};