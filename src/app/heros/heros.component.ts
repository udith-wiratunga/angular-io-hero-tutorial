import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero="Windstorm";
  constructor() { }

  ngOnInit() {
  }

}