define(['ojs/ojcore', './rest-table-with-filters', 'text!./rest-table-with-filters.html', 'ojs/ojcomposite'], function (oj, ComponentModel, view) {
    'use strict';
    var metadata = '{ "properties": { "restFilterData": { "type": "string"} } }';
    oj.Composite.register('rest-table-with-filters',
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