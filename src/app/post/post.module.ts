import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
  
@NgModule({
  declarations: [IndexComponent,SearchFilterPipe, ViewComponent, CreateComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }