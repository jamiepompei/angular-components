import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: any = [
    { name: 'Jon', age: 25, job: 'Engineer', employed: true },
    { name: 'Jessie', age: 22, job: 'Designer', employed: false },
    { name: 'Kyle', age: 28, job: 'Engineer', employed: true },
  ];
  headers: any = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
