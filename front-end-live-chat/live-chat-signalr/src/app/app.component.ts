import { Component } from '@angular/core';
import { IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-component',
    templateUrl: 'app-component.html',
    styleUrls: ['app-component.scss']
})
export class AppComponent {
    public gitHubIcon: IconDefinition;

    constructor(){
        this.gitHubIcon = faGithub;
    }
}
