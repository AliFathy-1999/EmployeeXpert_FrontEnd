import {AfterViewInit, Component,Injectable,OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator,PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PayrollDialogComponent } from '../payroll-dialog/payroll-dialog.component';
import { SalaryService } from '../service/salary.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit , AfterViewInit{

  // data: any;
  // totalCount!:number
  // pageSize!:number


  // displayedColumns: string[] = [ 'id','grossSalary' , 'bonus', 'userrName', 'position','deduction','netSalary','action'];

  salary: any[] = [];
  displayedColumns: string[] = ['id', 'grossSalary', 'bonus', 'userrName', 'position', 'deduction', 'netSalary', 'action'];

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalCount!: number;
  pageSize = 10;
  currentPageIndex = 1;
  totalPages!: number;

  // dataSource = new MatTableDataSource<any>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  

constructor(private _dialog:MatDialog, private _salary: SalaryService){

}
// salary:any=[]
// currentPageIndex:number=1
// totalPages!:number

getAllSalary(){
  this._salary.getAllSalary(this.currentPageIndex, 10).subscribe((res:any)=>{
    this.salary = res.data.docs;
    console.log(this.salary)
    this.dataSource.data = res.data.docs;
    // this.dataSource = new MatTableDataSource(this.salary);
    this.totalCount = res.data.totalDocs;
    this.totalPages = res.data.totalPages;
    this.dataSource.paginator = this.paginator;
  })
}

ngOnInit(): void {
  this.getAllSalary();
}


openDialog(){
 const dialogRef= this._dialog.open(PayrollDialogComponent);
 dialogRef.afterClosed().subscribe({
  next:(res:any)=>{
  if(res){
    this.getAllSalary();
  }  
  }
})
}


ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

// getAllSalary(){
//   this._salary.getAllSalary(this.currentPageIndex, 10).subscribe((res:any)=>{
//     this.salary = res.data.docs;
//     this.dataSource.data = res.data.docs;
//     console.log( this.dataSource.data)
//     this.totalCount = res.data.totalDocs;
//     this.totalPages = res.data.totalPages;
//     this.dataSource = new MatTableDataSource(this.dataSource.data);
//     this.dataSource.paginator = this.paginator;
//   })

// }

// getAllSalary(){
//   this._salary.getAllSalary(this.currentPageIndex, 10).subscribe((res:any)=>{
//     this.salary = res.data.docs;
//     // this.dataSource.data = res.data.docs;
//     console.log( this.dataSource.data)
//     this.dataSource = new MatTableDataSource(this.salary);
//     this.totalCount = res.data.totalDocs;
//     this.totalPages = res.data.totalPages;
//     this.dataSource.paginator = this.paginator;
//   })
// }

deleteBook(id:number){
  this._salary.deleteEmployeeSalaryById(id).subscribe((res:any)=>{
    this.getAllSalary();
  })
  }
  
  onPageChanged(event: PageEvent) {
    const newPageIndex = event.pageIndex;
    const newPageSize = event.pageSize;
    if (newPageIndex !== this.currentPageIndex || newPageSize !== this.pageSize) {
      this.currentPageIndex = newPageIndex;
      this.pageSize = newPageSize;
      this._salary.getAllSalary(this.currentPageIndex, this.pageSize).subscribe((result : any) => {
        this.salary=result.data.docs;
        this.totalCount = result.data.totalDocs;
        this.dataSource = new MatTableDataSource(this.salary);
        this.dataSource.paginator = this.paginator;
      });
    }
  }
  
  onPreviousPage() {
    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this._salary.getAllSalary(this.currentPageIndex, 10).subscribe((result:any) => {
        this.salary = result.data.docs;
        this.totalCount = result.data.totalDocs;
        this.dataSource = new MatTableDataSource(this.salary);
        this.dataSource.paginator = this.paginator;
      });
    }
  }
  
  onNextPage() {
    if (this.currentPageIndex < this.totalPages) {
      this.currentPageIndex++;
      this._salary.getAllSalary(this.currentPageIndex, 10).subscribe((result:any) => {
        this.salary = result.data.docs;
        this.totalCount = result.data.totalDocs;
        this.dataSource = new MatTableDataSource(this.salary);
        this.dataSource.paginator = this.paginator;
      });
    }
  }
  
  openEditDialog(data:any){
    const dialogRef=this._dialog.open(PayrollDialogComponent,{
      data
     })
    dialogRef.afterClosed().subscribe((res:any)=>{
      if(res){
        this.getAllSalary();
      }
     })
  }

}
