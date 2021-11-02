import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {
  characters: any = [];
  constructor(private service: CharactersService) { }

  async ngOnInit() {
    const characters: any = await this.service.getAll();
    this.characters = characters.results;
    console.log(this.characters);
  }

}
