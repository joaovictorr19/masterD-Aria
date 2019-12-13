import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {

  apiKey : string = 'YOUR-APIKEY-YOUTUBE';

  constructor() { }


}
