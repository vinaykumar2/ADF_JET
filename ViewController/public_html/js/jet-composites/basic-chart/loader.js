define(['ojs/ojcore', './basic-chart', 'text!./basic-chart.html', 'ojs/ojcomposite'], function (oj, ComponentModel, view) {
    'use strict';
    var metadata = '{ "properties": { "chartData": { "type": "string"} } }';
    oj.Composite.register('basic-chart',
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