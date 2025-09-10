import { Component, signal } from '@angular/core';

export interface Character {
  id: number
  name: string
  power: number
}

@Component({
  templateUrl: './dragonball-page.html',
  // imports: [NgClass]
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 1, name: 'Vegetta', power: 8000 },
    { id: 1, name: 'Piccolo', power: 3000 },
  ])

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })
}
