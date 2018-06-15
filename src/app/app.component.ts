import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  data = [
    {
      'name': 'kristy',
      'type': 'img',
      'url': 'http://unsplash.it/600/400?image=940',
      'defaultUrl': 'https://de.aorus.com/upload/Downloads/F_20170531143736CxudUM.JPG',
      'isDownload': true
    },
    {
      'name': 'kristy',
      'type': 'img',
      'url': 'http://unsplash.it/600/400?image=885',
      'defaultUrl': 'https://de.aorus.com/upload/Downloads/F_20170531143736CxudUM.JPG',
      'isDownload': true
    },
    {
      'name': 'kristy',
      'type': 'img',
      'url': 'http://unsplash.it/600/400?image=815',
      'defaultUrl': 'https://de.aorus.com/upload/Downloads/F_20170531143736CxudUM.JPG',
      'isDownload': true
    },
    {
      'name': 'kristy',
      'type': 'img',
      'url': 'http://unsplash.it/600/400?image=401',
      'defaultUrl': 'https://de.aorus.com/upload/Downloads/F_20170531143736CxudUM.JPG',
      'isDownload': true
    },
    {
      'name': 'kristy',
      'type': 'img',
      'url': 'http://unsplash.it/600/400?image=623',
      'defaultUrl': 'https://de.aorus.com/upload/Downloads/F_20170531143736CxudUM.JPG',
      'isDownload': true
    },
    {
      'name': 'kristy',
      'type': 'img',
      'url': 'http://unsplash.it/600/400?image=339',
      'defaultUrl': 'https://de.aorus.com/upload/Downloads/F_20170531143736CxudUM.JPG',
      'isDownload': true
    }
  ];

  constructor() {}

  ngOnInit() {

  }
  
}
