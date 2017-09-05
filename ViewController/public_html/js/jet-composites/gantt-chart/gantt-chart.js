define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojgantt'], function (oj, ko, $) {

    function GanttChartComponentModel(context) {
        var self = this;

            /* ------Gantt Data------ */
    self.data = [
  {
    "id": "r1",
    "label": "Person1",
    "tasks": [
      {
        "id":"task1",
        "start": "2016-01-04T00:00:00.000Z",
        "end": "2016-01-10T00:00:00.000Z",
        "label": "Travel in Component",
        "labelPosition": "innerCenter"
      },
      {
        "id":"task2",
        "start": "2016-01-13T00:00:00.000Z",
        "end": "2016-01-14T00:00:00.000Z",
        "label":"3/8",
        "labelPosition": "innerStart"
      },
      {
        "id":"task3",
        "start": "2016-01-19T00:00:00.000Z",
        "end": "2016-01-22T00:00:00.000Z",
        "label":"8/8",
        "labelPosition": "innerStart",
        "svgStyle": "bezet"
      }
    ]
  },
  {
    "id": "r2",
    "label": "Person2",
    "tasks": [
      {
        "id":"task2",
        "start": "2016-01-10T00:00:00.000Z",
        "end": "2016-01-24T00:00:00.000Z",
        "label":"Label 2",
        "labelPosition": "innerCenter"
      }
    ]
  },
  {
    "id": "r3",
    "label": "Person3",
    "tasks": [
      {
        "id":"task3",
        "start": "2016-01-25T00:00:00.000Z",
        "end": "2016-02-05T00:00:00.000Z",
        "label":"Label 3",
        "labelPosition": "innerStart"
      }
    ]
  },
  {
    "id": "r4",
    "label": "Person4",
    "tasks": [
      {
        "id":"task4",
        "start": "2016-02-05T00:00:00.000Z",
        "end": "2016-02-14T00:00:00.000Z",
        "label":"Label 4",
        "labelPosition": "innerEnd"
      }
    ]
  },
  {
    "id": "r5",
    "label": "Person5",
    "tasks": [
      {
        "id":"task5",
        "start": "2016-02-14T00:00:00.000Z",
        "end": "2016-02-19T00:00:00.000Z",
        "label":"Label 5"
      },
       {
        "id":"task2",
        "start": "2016-01-10T00:00:00.000Z",
        "end": "2016-01-12T00:00:00.000Z",
        "label":"6/8",
        "labelPosition": "innerStart"
      }
    ]
  },
  {
    "id": "r6",
    "label": "Person6",
    "tasks": [
      {
        "id":"task6",
        "start": "2016-02-19T00:00:00.000Z",
        "end": "2016-02-22T00:00:00.000Z",
        "label":"Label 6"
      }
    ]
  },
  {
    "id": "r7",
    "label": "Person7",
    "tasks": [
      {
        "id":"task7",
        "start": "2016-02-22T00:00:00.000Z",
        "end": "2016-03-04T00:00:00.000Z",
        "label":"Label 7"
      }
    ]
  },
  {
    "id": "r8",
    "label": "Person8",
    "tasks": [
      {
        "id":"task8",
        "start": "2016-03-04T00:00:00.000Z",
        "end": "2016-03-08T00:00:00.000Z",
        "label":"Label 8"
      }
    ]
  },
  {
    "id": "r9",
    "label": "Person9",
    "tasks": [
      {
        "id":"task9",
        "start": "2016-03-08T00:00:00.000Z",
        "end": "2016-03-15T00:00:00.000Z",
        "label":"Label 9"
      }
    ]
  },
  {
    "id": "r10",
    "tasks": [
      {
        "id":"Person10",
        "start": "2016-03-15T00:00:00.000Z",
        "end": "2016-03-20T00:00:00.000Z",
        "label":"Label 10"
      }
    ]
  }
];
      self.projectStartDate = new Date("Jan 1, 2016").toISOString();
      self.projectEndDate = new Date("Dec 31, 2016").toISOString();

    };

    return GanttChartComponentModel;

});