import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[rbdropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') get opened() {
        return this.isOpen;
    }

    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }

    @HostListener('mouseleave') close() {
        this.isOpen = false;
    }
    private isOpen = false;
}
