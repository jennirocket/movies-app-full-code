import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { MovieComponent } from './pages/movie/movie.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { GenresComponent } from './pages/genres/genres.component';
import { InputTextModule } from 'primeng/inputtext';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowComponent } from './pages/tvshow/tvshow.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MoviesComponent,
        SliderComponent,
        ItemsBannerComponent,
        ItemComponent,
        MovieComponent,
        VideoEmbedComponent,
        GenresComponent,
        TvShowsComponent,
        TvShowComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PaginatorModule,
        TabViewModule,
        ImageModule,
        CarouselModule,
        InputTextModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
