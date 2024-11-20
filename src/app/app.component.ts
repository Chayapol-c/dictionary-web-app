import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DictionaryService} from './dictionary.service';
import {Dictionary} from './models/dictionary';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AsyncPipe],
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
