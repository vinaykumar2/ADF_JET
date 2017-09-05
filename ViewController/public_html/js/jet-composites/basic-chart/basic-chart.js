define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout','ojs/ojbutton', 'ojs/ojchart', 'promise', 'ojs/ojgantt'], function (oj, ko, $) {

    function BasicChartComponentModel(context) {
        var self = this;

            /* ------Chart Data------ */
    /* toggle button variables */
    self.stackValue2 = ko.observable('off');
    self.orientationValue2 = ko.observable('vertical');

    /* chart data */
    var barSeries2 = [{name : "Series 1", items : [45, 37]},{name : "Series 2", items : [58, 33]},{name : "Series 3", items : [39, 53]},{name : "Series 4", items : [25, 49]},{name : "Series 5", items : [25, 49]}];

    var barGroups2 = ["Group A", "Group B"];

    self.barSeriesValue2 = ko.observableArray(barSeries2);
    self.barGroupsValue2 = ko.observableArray(barGroups2);

     /* toggle buttons*/
    self.stackOptions2 = [{id : 'unstacked', label : 'unstacked', value : 'off', icon : 'oj-icon demo-bar-unstack'},{id : 'stacked', label : 'stacked', value : 'on', icon : 'oj-icon demo-bar-stack'}];
    self.orientationOptions2 = [{id : 'vertical', label : 'vertical', value : 'vertical', icon : 'oj-icon demo-bar-vert'},{id : 'horizontal', label : 'horizontal', value : 'horizontal', icon : 'oj-icon demo-bar-horiz'}];



    }
    return BasicChartComponentModel;

});