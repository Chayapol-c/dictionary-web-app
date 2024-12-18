import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DictionaryService} from './services/dictionary.service';
import {Dictionary} from './models/dictionary';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf} from '@angular/common';
import {MeaningComponent} from './components/meaning/meaning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AsyncPipe, MeaningComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dictionary-web-app';
  word = ""

  searchedWordInfo$!: Observable<Dictionary[]>

  constructor(private dictionaryService: DictionaryService) {
  }


  onSearch() {
    if (this.word == "") {
      return
    }
    this.searchedWordInfo$ = this.dictionaryService.getWordInfo(this.word)
  }
}
