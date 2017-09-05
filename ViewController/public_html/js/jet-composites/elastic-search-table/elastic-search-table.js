define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojdatacollection-common'], function (oj, ko, $) {

        function RestESTableComponentModel(ordersData) {
            var self = this;

            self.dataArray = ko.observableArray();
           // var url = 'http://localhost:9200/firstindex/rental_object/_search';
            var url = 'http://pprt31:9200/test_index_jet/rental_object/_search';

           $.getJSON(url, function (data) {
                console.log(JSON.stringify(data));
                var hits = data.hits.hits;
                for (var i = 0; i < hits.length; i++) {
                    var _source = hits[i]._source;
                    self.dataArray.push({
                        part_no: _source.part_no,
                        company: _source.company,
                        site: _source.site,
                        warehouse: _source.warehouse,
                        location: _source.location

                    });
                }

            });

             self.dataSource = new oj.ArrayTableDataSource(
                    self.dataArray,
                    { idAttribute: 'company' }
                );
        }

return RestESTableComponentModel;

    });