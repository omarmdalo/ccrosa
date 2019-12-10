import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private _title: Title, private _meta: Meta) { 
    this.getDataRoute().subscribe(data => {
    this.titulo = data.titulo;
    this._title.setTitle(data.titulo);

    const metaTag: MetaDefinition = {
      name : 'Description',
      content: this.titulo
    };

    this._meta.updateTag(metaTag);
  });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((evento: ActivationEnd) => evento.snapshot.data)
      );
  }

}
