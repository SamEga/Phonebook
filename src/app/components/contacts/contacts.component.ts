import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('contacts')) {
      this.http.getContacts().subscribe(data => {
        localStorage.setItem('contacts', JSON.stringify(data));
        this.contacts = JSON.parse(localStorage.getItem('contacts'));
      });
    }
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
  }

  sortContacts() {
    this.contacts = this.contacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
}
