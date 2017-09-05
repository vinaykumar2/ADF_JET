define(['ojs/ojcore', './elastic-search-ihc', 'text!./elastic-search-ihc.html', 'ojs/ojcomposite'], function (oj, ComponentModel, view) {
    'use strict';
    var metadata = '{ "properties": { "restIHCData": { "type": "string"} } }';
    oj.Composite.register('elastic-search-ihc',
    {
        metadata :  {
            inline : JSON.parse(metadata)
        },
        viewModel :  {
            inline : ComponentModel
        },
        view :  {
            inline : view
        },
    });
});