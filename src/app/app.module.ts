import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from './services/post.service';
import { AgGridModule } from 'ag-grid-angular';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PostCreateComponent } from './post-create/post-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';



const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent },
  {path: 'create', component: PostCreateComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule ,
    InfiniteScrollModule ,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
