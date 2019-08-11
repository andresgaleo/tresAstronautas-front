import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit, AfterViewInit {

  @ViewChild('degress') degress: ElementRef;

  public planets : object 
  public namePlanet:string;
  constructor(
    private http:HttpClient,
    private renderer: Renderer2,
    private decimalpipe: DecimalPipe
  ) { }

  ngOnInit() {
    this.searchPlanets()
  }

  ngAfterViewInit() {
    this.searchPlanets()
  }

  searchPlanets(){
    return this.http.get("http://localhost:3000/planetas").subscribe(response=>{
      let response_p : any = response;
      //Alojar respuesta en variable
      let result = response_p.images;
      //Obtener el nombre de los indices para formar el <select> de la vista
      let names = Object.keys(result).join(" ");
      //Convierto el string en Array
      let arrayPlanet = names.split(" ");
      //Guardar en variable para pintar en la vista
      this.planets = arrayPlanet;
    });
  }

  searchPlanetForName(){
    return this.http.get("http://localhost:3000/planetas/"+this.namePlanet).subscribe(response=>{
      let result : any = response;
      this.renderer.setStyle(document.body,'background-image',"url("+result.img+")");
      this.degress.nativeElement.innerText=this.decimalpipe.transform(result.degrees,'1.4-4');
      //this.degress.nativeElement.innerText=result.degrees;
    });
  }
}
