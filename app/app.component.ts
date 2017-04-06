import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public list =  ['work', 'wood', 'man', 'wow', 'wonderful1']

    itemTapped(ev) {
        console.log(ev);
    }
}
