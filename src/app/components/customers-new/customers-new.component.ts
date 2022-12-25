import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { NgForm } from '@angular/forms';
import {CustomersService} from '../../services/customers.service'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.add(this.form);
      this.routerService.navigate(['..'], {
        relativeTo: this.activatedRoute
      }) 
    }
  }

  reset(customerForm: NgForm) {
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  constructor(private customerService: CustomersService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {}
}
