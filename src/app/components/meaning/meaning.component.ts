import {Component, Input} from '@angular/core';
import {Meaning} from '../../models/meaning';

@Component({
  selector: 'word-meaning',
  standalone: true,
  imports: [],
  templateUrl: './meaning.component.html',
  styleUrl: './meaning.component.css'
})
export class MeaningComponent {
  @Input() meaningData!: Meaning
}
