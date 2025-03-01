import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Admin',
                items: [
                    { label: 'Candidates', icon: 'pi pi-fw pi-user', routerLink: ['/admin/candidates'] },
                    { label: 'Response', icon: 'pi pi-fw pi-code', routerLink: ['/parser'] },
                    { label: 'Evaluate', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/evaluate'] },
                ]
            },
            {
                label: 'Interviewee',
                items: [
                    { label: 'Request', icon: 'pi pi-fw pi-search', routerLink: ['/interviewee/request'] },
                    { label: 'Interview1', icon: 'pi pi-fw pi-check-square', routerLink: ['interview1'] },
                    { label: 'Interview2', icon: 'pi pi-fw pi-check-square', routerLink: ['interview2'] },
                    { label: 'Chat', icon: 'pi pi-fw pi-check-square', routerLink: ['chat'] }

                ]
            },

            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Register',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            }
        ];
    }
}
