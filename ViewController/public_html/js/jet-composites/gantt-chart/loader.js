define(['ojs/ojcore', './gantt-chart', 'text!./gantt-chart.html', 'ojs/ojcomposite'], function (oj, ComponentModel, view) {
    'use strict';
    var metadata = '{ "properties": { "ganttData": { "type": "string"} } }';
    oj.Composite.register('gantt-chart',
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