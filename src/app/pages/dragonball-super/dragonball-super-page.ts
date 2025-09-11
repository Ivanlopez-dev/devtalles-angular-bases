import { Component, inject } from '@angular/core'
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list"
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add"
import { DragonballService } from '../../services/dragonball.service'

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService)

}
