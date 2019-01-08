import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private rowSelection;
  private columnDefs;
  private rowData: any;


  constructor(private postService: PostService) {
    this.columnDefs = [
      {
        headerName: "Rg",
        field: "userId",
        width: 150
      },
      {
        headerName: "CPF",
        field: "id",
        width: 90
      },
      {
        headerName: "Rota",
        field: "title",
        width: 400
      },
      {
        headerName: "Historico",
        field: "body",
        width: 800
      },

    ];


  }


  ngOnInit() {
    this.postService.query()
      .subscribe(data => this.rowData = data)

    console.log();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.postService.query().subscribe(data => {
      params.api.setRowData(data);
      console.log(data);
    });

  }

}
