import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';


import { environment } from '../environments/environment.development';
import { MenuComponent } from './shared/menu/menu.component';
import { LiveComponent } from './pages/live/live.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TestPipe } from './shared/pipes/test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    MenuComponent,
    LiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatLabel,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TestPipe,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
  exports: [TestPipe],
})
export class AppModule { }
