import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit {
  character: any = {};
  constructor(private activatedRoute: ActivatedRoute, private service: CharactersService) { }

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id; // lo mismo que poenr req.params.id
    this.character = await this.service.getSingle(params);
    console.log(this.character);
  }

}
