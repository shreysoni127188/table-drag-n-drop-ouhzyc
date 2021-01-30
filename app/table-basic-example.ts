import {Component, ViewChild, OnInit, ContentChildren, QueryList} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { MatTable, MatTableDataSource } from '@angular/material';
import clonedeep from 'lodash.clonedeep';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
  @ViewChild('table1') table1: MatTable<any>;
  @ViewChild('table2') table2: MatTable<any>;
  @ViewChild('list1') list1: CdkDropList;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ELEMENT_DATA: PeriodicElement[];
  ELEMENT_DATA2: PeriodicElement[];
  dataSource;
  dataSource2;

  ngOnInit() {
      this.ELEMENT_DATA = [
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

this.ELEMENT_DATA2 = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},

];

  this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    // updates moved data and table, but not dynamic if more dropzones
    this.dataSource.data = clonedeep(this.dataSource.data);
    this.dataSource2.data = clonedeep(this.dataSource2.data);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */