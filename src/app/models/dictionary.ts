import {Meaning} from './meaning';
import {Phonetic} from './phonetic';

export interface Dictionary {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  license: {
    name: string;
    url: string;
  }
  sourceUrls: string[];
}


