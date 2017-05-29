/*
import { Injectable, Inject } from '@angular/core';
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";

@Injectable()
export class TranslationsService {
  private LOCAL_STORAGE_KEY = 'language';

  constructor(@Inject('window') private window: Window, private translateService: TranslateService) {
  }

  public initialize() {
    const localStorage = this.window.localStorage;

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, event.lang);
    });

    const language = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    if (language) {
      this.translateService.use(language);
    } else {
      this.translateService.setDefaultLang('nl');
    }
  }
}
*/
