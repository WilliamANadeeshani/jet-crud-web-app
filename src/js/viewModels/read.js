/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your Create ViewModel code goes here
 */
define(['ojs/ojcore', 'handlers/getPeopleHandler', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
        function (oj, getPeopleFactory) {

            function CreateViewModel() {
                var self = this;
                self.peopleCollection = getPeopleFactory.createPeopleCollection();
                self.tableDataSource = new oj.CollectionTableDataSource(this.peopleCollection);
                this.peopleCollection.fetch();
            }
            return new CreateViewModel();
        }
);
