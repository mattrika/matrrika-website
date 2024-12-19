import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text'
 import { NgxThreeGlobeComponent } from '@omnedia/ngx-three-globe'

 @Component({
     selector: 'app-banner-two',
     imports: [
         CommonModule,
         RouterModule,
         NgxGradientTextComponent,
         NgxThreeGlobeComponent,
     ],
     templateUrl: './banner-two.component.html',
     styleUrl: './banner-two.component.scss',
 })
 export class BannerTwoComponent {}
