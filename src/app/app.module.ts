import { RecipeService } from './../services/recipe.service';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShoppingService } from '../services/shopping.service';
import { RecipePage } from '../pages/recipe/recipe';
import { RecipeEditPage } from '../pages/recipe-edit/recipe-edit';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipePage,
    RecipeEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipePage,
    RecipeEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShoppingService,
    RecipeService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
