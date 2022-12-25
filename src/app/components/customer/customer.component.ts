import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomersComponent implements OnInit {

  inputFN ='';
  inputLN ='';
  inputPN ='';

  customers$: Observable<Required<Customer>[]>;

  constructor(private CustomersService: CustomersService) {
    this.customers$ = this.CustomersService.getAll();
  }

remove(id:string){

  if(confirm('R U sure you wont to delete the customer ?')){
    this.CustomersService.remove(id);
  }

}

  ngOnInit(): void {}
}
