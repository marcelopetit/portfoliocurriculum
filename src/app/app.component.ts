import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {DatosPersonaService} from "../app/datos-persona.service"


@Component({
 selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

public datosPersona: any;
constructor(public datosPersonaService: DatosPersonaService){}
title = 'proyectocurriculum';


ngOnInit()  {
this.datosPersonaService.getPersona().subscribe((data) => {
this.datosPersona = data;
})

}

}

