import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  selector: 'app-interview2',
  templateUrl: './interview2.component.html',
})
export class Interview2Component implements OnInit, AfterViewInit {
  editor: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Initialisation de l'éditeur ACE
    this.editor = ace.edit('editor', {
      theme: 'ace/theme/monokai', // Thème de l'éditeur
      mode: 'ace/mode/javascript', // Mode de coloration syntaxique (ici JavaScript)
      autoScrollEditorIntoView: true,
      wrap: true,
      fontSize: 14,
      showPrintMargin: false,
    });

    // Définir le contenu par défaut
    this.editor.setValue('// Votre code ici', -1); // Valeur par défaut
  }
}
