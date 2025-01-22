import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];
  public products: {
    pid: string;
    name: string;
    description: string;
    price: number;
  }[] = [];
  constructor(private _employeeService:EmployeeService, private _productService:ProductsService){}
  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
//   public employees = [{
//     id: 101,
//     firstname: 'Reuel Christian',
//     lastname: 'Sundiam',
//     email: 'rgsundiam@student.hau.edu.ph',
//   },
//   {
//     id: 102,
//     firstname: 'Reuel Christopher',
//     lastname: 'Sundiam',
//     email: 'cgsundiam@stuent.hau.edu.ph',
//   },
//   {
//     id: 103,
//     firstname: 'Mary Reia Christelle',
//     lastname: 'Sundiam',
//     email: 'mrcsundiam@student.hau.edu.ph',
//   },
//   {
//     id: 104,
//     firstname: 'Christine',
//     lastname: 'Sundiam',
//     email: 'chsundiam@student.hau.edu.ph',
//   },

// ]
}
