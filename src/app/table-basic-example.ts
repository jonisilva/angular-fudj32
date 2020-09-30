import { Component } from "@angular/core";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  gas: boolean;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, gas: 1 },
//   { position: 2, name: "Helium", weight: 4.0026, gas: 1 },
//   { position: 3, name: "Lithium", weight: 6.941, gas: 0 },
//   { position: 4, name: "Beryllium", weight: 9.0122, gas: 0 },
//   { position: 5, name: "Boron", weight: 10.811, gas: 1 },
//   { position: 6, name: "Carbon", weight: 12.0107, gas: 0 },
//   { position: 7, name: "Nitrogen", weight: 14.0067, gas: 0 },
//   { position: 8, name: "Oxygen", weight: 15.9994, gas: 0 },
//   { position: 9, name: "Fluorine", weight: 18.9984, gas: 1 },
//   { position: 10, name: "Neon", weight: 20.1797, gas: 1 },
// ];

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, gas: "yes" },
//   { position: 2, name: "Helium", weight: 4.0026, gas: "yes" },
//   { position: 3, name: "Lithium", weight: 6.941, gas: "no" },
//   { position: 4, name: "Beryllium", weight: 9.0122, gas: "no" },
//   { position: 5, name: "Boron", weight: 10.811, gas: "yes" },
//   { position: 6, name: "Carbon", weight: 12.0107, gas: "no" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, gas: "no" },
//   { position: 8, name: "Oxygen", weight: 15.9994, gas: "no" },
//   { position: 9, name: "Fluorine", weight: 18.9984, gas: "yes" },
//   { position: 10, name: "Neon", weight: 20.1797, gas: "yes" },
// ];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, gas: true },
  { position: 2, name: "Helium", weight: 4.0026, gas: true },
  { position: 3, name: "Lithium", weight: 6.941, gas: false },
  { position: 4, name: "Beryllium", weight: 9.0122, gas: false },
  { position: 5, name: "Boron", weight: 10.811, gas: true },
  { position: 6, name: "Carbon", weight: 12.0107, gas: false },
  { position: 7, name: "Nitrogen", weight: 14.0067, gas: false },
  { position: 8, name: "Oxygen", weight: 15.9994, gas: false },
  { position: 9, name: "Fluorine", weight: 18.9984, gas: true },
  { position: 10, name: "Neon", weight: 20.1797, gas: true },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html",
})
export class TableBasicExample {
  displayedColumns: string[] = ["position", "name", "weight", "gas"];
  dataSource = ELEMENT_DATA;
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
