import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Datas } from 'src/app/model/datas.model';

@Component({
  selector: 'app-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.css']
})
export class EditColumnComponent implements OnInit {

  @Input('inputData') receivedData : Datas; 
  @Output('updateData') updateData = new EventEmitter();
  @Output('closeEdit') closeEdit = new EventEmitter();

  dataForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.receivedData);
    
    this.dataForm = new FormGroup({
      'body': new FormControl(this.receivedData.body),
      'id': new FormControl(this.receivedData.id),
      'title': new FormControl(this.receivedData.title),
      'userId': new FormControl(this.receivedData.userId)
    });
  }

  close(){
    this.closeEdit.emit();
  }

  save(){
    console.log(this.dataForm.value);
    this.updateData.emit({
      body: this.dataForm.value.body,
      id: this.dataForm.value.id,
      userId: this.dataForm.value.userId,
      title: this.dataForm.value.title
    });
    this.close();
  }
}
