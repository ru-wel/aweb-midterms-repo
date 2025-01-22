import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [{
      id: 101,
      firstname: 'Reuel Christian',
      lastname: 'Sundiam',
      email: 'rgsundiam@student.hau.edu.ph',
    },
    {
      id: 102,
      firstname: 'Reuel Christopher',
      lastname: 'Sundiam',
      email: 'cgsundiam@stuent.hau.edu.ph',
    },
    {
      id: 103,
      firstname: 'Mary Reia Christelle',
      lastname: 'Sundiam',
      email: 'mrcsundiam@student.hau.edu.ph',
    },
    {
      id: 104,
      firstname: 'Christine',
      lastname: 'Sundiam',
      email: 'chsundiam@student.hau.edu.ph',
    },
  
  ]
  }
}
