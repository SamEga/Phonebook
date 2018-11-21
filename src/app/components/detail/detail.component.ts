import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number;
  user: any;
  contacts: any;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    this.getUser();
  }

  getUser(): void {
    // Getting id user from url
    this.id = +this.route.snapshot.paramMap.get('id');
    for (let index = 0; index < this.contacts.length; index++) {
      const element = this.contacts[index];
      if (element.id === this.id) {
        this.user = element;
        console.log(element);
      }
    }
  }

  goBack() {
    this.location.back();
  }

  saveChange() {
    // Replace local-storage storage
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
