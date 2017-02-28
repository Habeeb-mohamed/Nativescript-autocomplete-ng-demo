import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public list = ['1', '2', '3', '4', '567'];

    itemTapped(ev) {
        console.log(ev);
    }
}
