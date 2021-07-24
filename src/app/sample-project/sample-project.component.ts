


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DemoService } from '../demo-service';
import { Datas } from '../model/datas.model';

export interface SampleData {
  id: string;
  title: string;
  userId: string;
  body: string;
  edit: string;
}

@Component({
  selector: 'app-sample-project',
  templateUrl: './sample-project.component.html',
  styleUrls: ['./sample-project.component.css']
})
export class SampleProjectComponent  {

  displayedColumns: string[] = ['id', 'title', 'userId', 'body', 'edit'];
  dataSource= new MatTableDataSource<Datas>();
  receivedData: Datas[] = [];
  sentData: Datas =null;

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  
  constructor(private dataService: DemoService) {
    // this.dataService.receiveData().subscribe((data) => {
    //   this.receivedData = data;
    //   console.log(this.receivedData);

    //   this.receivedData.forEach((element, index) => {
    //     this.receivedData[index].edit = "Edit";
    //   });
    //   console.log(this.receivedData);
      
    //   this.dataSource = new MatTableDataSource<Datas>(this.receivedData);
    //   this.dataSource.sort = this.sort;

    // });
  }
  
  ngOnInit(): void {
    if(this.dataService.receiveData().length == 0){
       console.log("inside if");            
      this.dataService.getDatas().subscribe(resp=>{ 
        this.dataCheck();
      });
    } 
    else {
      console.log("inside else");
      this.dataCheck(); 
    }
  }

  dataCheck(){
    this.receivedData = this.dataService.receiveData();
    console.log(this.receivedData);

    this.receivedData.forEach((element, index) => {
      this.receivedData[index].edit = "Edit";
    });
    this.dataSource = new MatTableDataSource<Datas>(this.receivedData);
    this.dataSource.sort = this.sort;
  }
  
  editData(data){
    console.log(data);
    this.sentData = data; 
    console.log(this.sentData);       
  }

  updateNewData(newData){
    console.log(newData);
    
    this.receivedData.forEach((element,index) => {
      if(element.id == newData.id){
        this.receivedData[index].body = newData.body;
        this.receivedData[index].id = newData.id;
        this.receivedData[index].title = newData.title;
        this.receivedData[index].userId = newData.userId;
      }
    });
  }

  closeEditing(){
      this.sentData = null;
  }

}



