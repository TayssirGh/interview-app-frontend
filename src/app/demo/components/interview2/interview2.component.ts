import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  selector: 'app-interview2',
  templateUrl: './interview2.component.html'
})
export class Interview2Component implements OnInit, AfterViewInit {
  editor: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Configuration de base pour ACE Editor
    ace.config.set('basePath', '/assets/ace'); // Assurez-vous que le chemin soit correct pour charger ACE

    // Initialisation de l'éditeur
    this.editor = ace.edit('editor', {
      theme: 'ace/theme/monokai', // Choisir un thème
      mode: 'ace/mode/javascript', // Choisir le mode (ici JavaScript)
      autoScrollEditorIntoView: true,
      wrap: true,
      fontSize: 14,
      showPrintMargin: false,
    });

    // Définir une valeur par défaut dans l'éditeur
    this.editor.setValue('// Votre code ici', -1); 
  }
}
