import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from '../../services/contacts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactsServices: ContactsService) {
    this.contacts = this.contactsServices.getContacts();
  }
  ngOnInit(): void {}
}
