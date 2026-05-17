import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ArticleService } from 'src/app/services/stock/article-service';
import { ActivatedRoute } from '@angular/router';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, ArticleCardComponent],
})
export class ArticlePage implements OnInit {
  back: any;
  article_id: any
  _article = inject(ArticleService);
  aroute = inject(ActivatedRoute);
  article: any = {};

  constructor() {}

  ngOnInit() {
    this.article_id = this.aroute.snapshot.paramMap.get('article_id');
    this.getArticle();
    this.back = '/articles';
  }

  getArticle(){
    this._article.getArticle(this.article_id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.article = res.data
      },
      error: (error: any) => console.log(error),
    })
  }
}
