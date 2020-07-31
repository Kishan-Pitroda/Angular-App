import { Consumer } from 'src/app/consumer';
import { Router, RouterLink } from '@angular/router';
import { ConsumerService } from './../../../services/consumer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLinkRendererComponent } from '../router-link-renderer/router-link-renderer.component';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css'],
})
export class ConsumersComponent implements OnInit {
  selectedConsumer: Consumer;
  columnDefs = [];
  rowData = [];
  gridOptions: any;
  gridApi: any;
  gridColumnApi: any;

  constructor(private service: ConsumerService, private router: Router) {}

  ngOnInit(): void {
    this.service.getConsumers().subscribe((response) => {
      this.rowData = response;
    });

    console.log('refresh');

    this.columnDefs = [
      {
        headerName: 'Id',
        field: 'id',
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      {
        headerName: 'Username',
        field: 'name',
      },
      {
        field: 'email',
      },
      {
        headerName: '',
        field: 'view',
        cellRendererFramework: RouterLinkRendererComponent,
        cellRendererParams: {
          inRouterLink: '/consumers',
          name: 'View',
        },
      },
      {
        headerName: '',
        field: 'edit',
        cellRendererFramework: RouterLinkRendererComponent,
        cellRendererParams: {
          inRouterLink: '/consumers/edit',
          name: 'Edit',
        },
      },
      {
        headerName: '',
        field: 'delete',
        cellRendererFramework: RouterLinkRendererComponent,
        cellRendererParams: {
          inRouterLink: '/consumers/delete',
          name: 'Delete',
        },
      },
    ];

    this.gridOptions = {
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
      },
      rowSelection: 'multiple',
      pagination: true,
      paginationPageSize: 5,
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onPageSizeChanged() {
    var value = document.getElementById('page-size');
    this.gridApi.paginationSetPageSize(Number(value));
  }
}
