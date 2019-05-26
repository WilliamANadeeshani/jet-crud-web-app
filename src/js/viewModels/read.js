/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your Create ViewModel code goes here
 */
define(['knockout', 'jquery', 'text!data/ServiceURLs.json', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
        function (ko, $, serviceURLs) {

            function CreateViewModel() {
                var self = this;
                self.tabledata = ko.observableArray();
                self.getPeopleServiceUrl = serviceURLs.getPeople;
                $.getJSON("http://127.0.0.1:7101/ADF_REST_Service-RESTWebService-context-root/rest/v1/People").
                        then(function (people) {
                            $.each(people.items, function () {
                                console.log(this);
                                self.tabledata.push({
                                    PersonId: this.PersonId,
                                    PersonName: this.PersonName,
                                    PersonEmail: this.PersonEmail,
                                    PersonDesignation: this.PersonDesignation
                                });
                            });

                        });
                self.tabledataSource = new oj.ArrayTableDataSource(self.tabledata, {idAttribute: 'PersonId'});
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new CreateViewModel();
        }
);
