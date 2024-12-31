import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'parser', loadChildren: () => import('./demo/components/parser/component/parser.module').then(m => m.ParserModule) },
                    { path: 'candidate', loadChildren: () => import('./demo/components/candidate/component/candidate.module').then(m => m.CandidateModule) },
                    { path: 'admin/candidates', loadChildren: () => import('./demo/components/admin/component/admin.module').then(m => m.AdminModule) },
                    { path: 'interviewee/request', loadChildren: () => import('./demo/components/interviewee/interviewee.module').then(m => m.IntervieweeModule) },
                    { path: 'interview1', loadChildren: () => import('./demo/components/interview1/interview1.module').then(m => m.Interview1Module) },
                    { path: 'chat', loadChildren: () => import('./demo/components/chat/component/chat.module').then(m => m.ChatModule) },
                    { path: 'interview2', loadChildren: () => import('./demo/components/interview2/interview2.module').then(m => m.Interview2Module) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'register', loadChildren: () => import('./demo/components/auth/register/register.module').then(m => m.RegisterModule) },
                    { path: 'login', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule) }

                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
