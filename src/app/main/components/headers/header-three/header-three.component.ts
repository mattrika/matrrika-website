import { NgClass, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, inject, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-three',
  imports: [RouterModule,NgStyle,NgClass],
  templateUrl: './header-three.component.html',
  styleUrl: './header-three.component.scss'
})
export class HeaderThreeComponent implements AfterViewInit, OnDestroy {
  renderer = inject(Renderer2);
  documentClickListener: (() => void) | null = null;

  @ViewChild('mobileNavDrawer') MobileNav!: ElementRef<HTMLDivElement>;
  @ViewChild('menuButton') MenuButton!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    this.documentClickListener = this.renderer.listen(document, 'click', (event: Event) => {
      const targetElement = event.target as HTMLElement;
      if (
        !targetElement.closest('#mobileNavDrawer') &&
        !targetElement.closest('#menuButton')
      ) {
        this.closeMobileNav();
      }
    });
  }

  isMobileNavVisible(): boolean {
    return this.MobileNav.nativeElement.classList.contains('left-0');
  }

  ToggleMobileNav() {
    this.MobileNav.nativeElement.classList.toggle('left-0');
    this.MobileNav.nativeElement.classList.toggle('-left-full');
    if (this.isMobileNavVisible() && window.innerWidth <640 ) {
      document.body.classList.add('overflow-y-hidden');
    } else{
      document.body.classList.remove('overflow-y-hidden')
    }
  }

  closeMobileNav() {
    this.MobileNav.nativeElement.classList.remove('left-0');
    this.MobileNav.nativeElement.classList.add('-left-full');
    document.body.classList.remove('overflow-y-hidden')
  }


  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.isScrolled = scrollPosition > 5;
  }

  ngOnDestroy(): void {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }




}
