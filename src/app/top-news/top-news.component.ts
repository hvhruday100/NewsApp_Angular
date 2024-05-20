import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  topHeadlinesData: any;

  constructor(private api: NewsapiService) { 
  }

  ngOnInit(): void {
    this.api.topHeadlines().subscribe(data => {
      this.topHeadlinesData = data.articles;
      console.log(this.topHeadlinesData);
    })
  }

}
