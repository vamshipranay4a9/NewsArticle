import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        ScrollToTopComponent
    ],
    exports: [
      ScrollToTopComponent
    ],
    providers: [
    ]
})
export class LibraryModule { }
