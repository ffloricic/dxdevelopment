import { Component, OnInit, ViewChild } from '@angular/core';
import { DxTextBoxComponent, DxButtonComponent } from 'devextreme-angular';
import DataGrid from 'devextreme/ui/data_grid';
import TextBox from 'devextreme/ui/text_box';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.css']
})
export class ProbaComponent implements OnInit {

  constructor() { }

  // initialize widget property(in this particular case, type property), with angular component property. For one directional communication, i.e. component -> widget,
  // use [] parenthesis. E.g.: [type]="buttonType". It's good to notice that although component property has it's own value, sintax contains "" signs to enclose angular property name. Btw,
  // works also without "" signs, all the same.
  buttonType: string = "default";
  buttonText: string = "Reset text box";
  dataGrid: DataGrid;
  textBoxInstance: {}; // TextBox;

  ////////////////////////////////
  @ViewChild(DxTextBoxComponent) textBox: DxTextBoxComponent;

  public textBoxValue = 'bla, bla bla';
  // @ViewChild("nameTextBox") textBox: DxTextBoxComponent;

  ngOnInit() {
  }

  public helloWorld() {
    alert('Hello world!');
  }

  public refreshTextBox(e) {
    // this.textBox.instance.reset(); // instance.refresh();
    // this.textBoxInstance.value = 'bla';
    console.log(this.textBox);
  }

  public saveTextBoxInstance(e: any) {
    this.textBoxInstance = e.component;
  }
}
