import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, IonButton, IonSearchbar } from '@ionic/angular/standalone';
import { ArticleService } from 'src/app/services/stock/article-service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { addIcons } from 'ionicons';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonRefresher,
    IonRefresherContent,
    ArticleCardComponent,
    IonSearchbar,
    PaginationComponent,
  ],
})
export class ArticlesPage implements OnInit {
  back: any;
  _article = inject(ArticleService);
  articles: any = [];
  page = 1;
  lastPage = 1;

  constructor() {}

  ngOnInit() {
    this.getArticles();
  }

  reload(event: any) {
    this.getArticles();
  }

  getArticles() {
    this._article.getArticles('', this.page).subscribe({
      next: (res: any) => {
        this.articles = res.data;
        this.lastPage = res.meta.last_page;
      },
      error: (error: any) => console.log(error),
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.lastPage) {
      this.page = page;
      this.getArticles();
    }
  }
}
