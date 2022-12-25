import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = [
    {
      id: '5eccd84b63798ecee4f530f7',
      name: 'Apple co.',
      email: 'info@apple.com',
      addToCorp: new Date('2020-02-25T06:36:12'),
      phones: ['+1 (855) 417-3827'],
      icon: 'bi bi-apple',
    },
    {
      id: '5eccd84bb074b3d8c2b1ed05',
      name: 'Whatsapp co.',
      email: 'info@whatsapp.com',
      addToCorp: new Date('2016-04-19T01:42:16'),
      phones: ['+1 (931) 490-2325', '+1 (835) 560-3711'],
      icon: 'bi bi-whatsapp',
    },
    {
      id: '5eccd84b1d85b009d7649afd',
      name: 'Twitter',
      email: 'info@twitter.com',
      addToCorp: new Date('2017-09-22T08:13:04'),
      phones: ['+1 (982) 463-2539'],
      icon: 'bi bi-twitter',
    },
    {
      id: '5eccd84bf8343e2c936872da',
      name: 'Snapchat',
      email: 'info@snapchat.com',
      addToCorp: new Date('2014-08-10T05:39:22'),
      phones: ['+1 (810) 512-2750', '+1 (816) 541-3648', '+1 (897) 445-3800'],
      icon: 'bi bi-snapchat',
    },
    {
      id: '5eccd84ba82601a8fd09c0e1',
      name: 'Skype',
      email: 'info@skype.com',
      addToCorp: new Date('2016-02-08T08:43:57'),
      phones: ['+1 (803) 403-2929', '+1 (885) 496-3950'],
      icon: 'bi bi-skype',
    },
    {
      id: '5eccd84b8720e25fda396317',
      name: 'Playstation',
      email: 'info@ps.com',
      addToCorp: new Date('2016-06-10T04:41:17'),
      phones: ['+1 (844) 408-3338'],
      icon: 'bi bi-playstation',
    },
    {
      id: '5eccd84b195e403248341ade',
      name: 'Microsoft',
      email: 'info@microsoft.com',
      addToCorp: new Date('2017-09-15T05:06:15'),
      phones: ['+1 (912) 480-3008', '+1 (837) 443-3835', '+1 (996) 553-3609'],
      icon: 'bi bi-microsoft',
    },
    {
      id: '5eccd84bfa98dd26fdc1ad5f',
      name: 'Messenger',
      email: 'info@messenger.com',
      addToCorp: new Date('2016-10-02T05:12:59'),
      phones: [],
      icon: 'bi bi-messenger',
    },
    {
      id: '5eccd84b9346cb8d4d358e8a',
      name: 'GitHub',
      email: 'info@github.com',
      addToCorp: new Date('2017-03-14T01:46:01'),
      phones: ['+1 (870) 495-2044', '+1 (974) 599-2052', '+1 (802) 443-3622'],
      icon: 'bi bi-github',
    },
    {
      id: '5eccd84bb47204c4f2a3352a',
      name: 'Facebook Co.',
      email: 'info@facebook.com',
      addToCorp: new Date('2014-11-18T03:05:23'),
      phones: ['+1 (867) 575-2067'],
      icon: 'bi bi-facebook',
    },
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }
  constructor() {}
}
