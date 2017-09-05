define(['ojs/ojcore', './elastic-search-table', 'text!./elastic-search-table.html', 'ojs/ojcomposite'], function (oj, ComponentModel, view) {
    'use strict';
    var metadata = '{ "properties": { "restData": { "type": "string"} } }';
    oj.Composite.register('elastic-search-table',
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