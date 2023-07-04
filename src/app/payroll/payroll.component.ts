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

  data: any;
  totalCount!:number
  pageSize!:number


  displayedColumns: string[] = ['id', 'pImage' ,'userName', 'position', 'grossSalary' ,'deduction', 'bonus','netSalary','action'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

constructor(private _dialog:MatDialog, private _salary: SalaryService){

}

ngOnInit(): void {
  this.getAllSalary();
}
salary:any=[]
currentPageIndex:number=1
totalPages!:number

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
  this.getAllSalary();
  this.dataSource.paginator = this.paginator;
}

getAllSalary(){
  this._salary.getAllSalary(this.currentPageIndex, 10).subscribe((res:any)=>{
    this.salary = res.data;
    this.totalCount = res.data.totalDocs;
    this.totalPages = res.data.totalPages;
    this.dataSource = new MatTableDataSource(this.salary);
    this.dataSource.paginator = this.paginator;
  })

}

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
