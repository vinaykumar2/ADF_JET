define(['ojs/ojcore', './rest-table', 'text!./rest-table.html', 'ojs/ojcomposite'], function (oj, ComponentModel, view) {
    'use strict';
    var metadata = '{ "properties": { "restData": { "type": "string"} } }';
    oj.Composite.register('rest-table',
    {
        metadata :  {
            inline : JSON.parse(metadata)
        },
        viewModel :  {
            inline : ComponentModel
        },
        view :  {
            inline : view
        }
    });
});