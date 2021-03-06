import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  globalUnits = ["km", "m", "mm", "miles", "yards", "feet"];
  selectedOption = 'km';
  selectedOption2 = 'miles';
  number= 1;

  conversion = [
    [1, 1000, 1000000, 0.6213711, 1094, 3280.8399166],
    [0.001, 1, 1000, 0.0006213, 1.0938712, 3.2804478],
    [0.000001, 0.001, 1, 0.0000006213, 0.0010938712, 0.0032804478],
    [1.6093442, 1609.3442, 1609000.3442, 1, 1760.6225973, 5280.0007769],
    [0.000914, 0.914, 914, 0.0005679, 1, 2.9933802],
    [0.0003047, 0.3047, 304.7, 0.0001893, 0.3331342, 1]
  ];

  globalConvert = function (input, inputUnit, outputUnit) {

    var result;
    var idUnite1 = 0;
    var idUnite2 = 0;


    if (!input) {
      return "awful error, no valid input ";
    } else {
      for (var i = 0; i < this.globalUnits.length; i++) {

        if (inputUnit == this.globalUnits[i]) {//---> KEEP
          idUnite1 = i;
        }
        if (outputUnit == this.globalUnits[i]) {
          idUnite2 = i;
        }
      }
      result = parseFloat(input) * this.conversion[idUnite1][idUnite2];
      return result;
    }
  };


  constructor() {
  }

  ngOnInit() {
  }

}
