import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Component, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {CounterComponent} from "./components/counter/counter.component";
import {UserageComponent} from "./components/userage/userage.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowusernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {FahrenheittocelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {TemperatureconverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppinglistComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialcalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodomanagerComponent} from "./components/todomanager/todomanager.component";
import {GuessnumbergameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {WordcounterComponent} from "./components/wordcounter/wordcounter.component";
import {MultiplicationcheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {UppercaseconverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {BmisolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernamevalidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestcalculatorComponent} from "./components/interestcalculator/interestcalculator.component";
import {
  CompoundinterestcalculatorComponent
} from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import {OddsumcalculatorComponent} from "./components/oddsumcalculator/oddsumcalculator.component";
import {CurrencyformatterComponent} from "./components/currencyformatter/currencyformatter.component";
import {RandomquotedisplayComponent} from "./components/randomquotedisplay/randomquotedisplay.component";
import {DivisiblecheckerComponent} from "./components/divisiblechecker/divisiblechecker.component";
import {FormsModule} from "@angular/forms";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {RandomnumbergeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {WorldshufflerComponent} from "./components/worldshuffler/worldshuffler.component";
import {FibonnaccigeneratorComponent} from "./components/fibonnaccigenerator/fibonnaccigenerator.component";
import {UppercasegreettingComponent} from "./components/uppercasegreetting/uppercasegreetting.component";
import {UsegreetingComponent} from "./components/usegreeting/usegreeting.component";
import {WordrevserComponent} from "./components/wordrevser/wordrevser.component";
import {MoodtrakerComponent} from "./components/moodtraker/moodtraker.component";
import {ColorpickerComponent} from "./components/colorpicker/colorpicker.component";
import {CountercomponentComponent} from "./components/countercomponent/countercomponent.component";
import {ToggleComponent} from "./components/toggle/toggle.component";
import {ProgressbarComponent} from "./components/progressbar/progressbar.component";
import {ChecklistComponent} from "./components/checklist/checklist.component";
import {StarratingComponent} from "./components/starrating/starrating.component";
import {TooglecontentComponent} from "./components/tooglecontent/tooglecontent.component";
import {CountdownComponent} from "./components/countdown/countdown.component";



const  routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'displayhelloworld', component: DisplayhelloworldComponent},
  { path: 'showhellobutton', component: ShowhellobuttonComponent},
  { path: 'displayname', component: DisplaynameComponent},
  { path: 'counter', component: CounterComponent},
  { path: 'simpleform', component: SimpleformComponent},
  { path: 'userage', component: UserageComponent},
  { path: 'usergreeting', component: UsegreetingComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'textlength', component: TextlengthComponent},
  { path: 'currencyconverter', component: CurrencyconverterComponent},
  { path: 'evenoddchecker', component: EvenoddcheckerComponent},
  { path: 'wordreverser', component: WordrevserComponent},
  { path: 'showdate', component: ShowdateComponent},
  { path: 'showusername', component: ShowusernameComponent},
  { path: 'multiplicationable', component: MultiplicationtableComponent},
  { path: 'simplelogin', component: SimpleloginComponent},
  { path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  { path: 'bookmarklist', component: BookmarklistComponent},
  { path: 'charactercounter', component: CharactercounterComponent},
  { path: 'palindromechecker', component: PalindromecheckerComponent},
  { path: 'temperatureconverter', component: TemperatureconverterComponent},
  { path: 'shoppinglist', component: ShoppinglistComponent},
  { path: 'factorialcalculator', component: FactorialcalculatorComponent},
  { path: 'todomanager', component: TodomanagerComponent},
  { path: 'guessnumbergame', component: GuessnumbergameComponent},
  { path: 'wordcounter', component: WordcounterComponent},
  { path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
  { path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
  { path: 'uppercaseconverter', component: UppercaseconverterComponent},
  { path: 'wordshuffler', component: WorldshufflerComponent},
  { path: 'bmisolver', component: BmisolverComponent},
  { path: 'usernamevalidator', component: UsernamevalidatorComponent},
  { path: 'interestcalculator', component: InterestcalculatorComponent},
  { path: 'compoundinterestcalculator', component: CompoundinterestcalculatorComponent},
  { path: 'fibonaccigenerator', component: FibonnaccigeneratorComponent},
  { path: 'oddsumcalculator', component: OddsumcalculatorComponent},
  { path: 'currencyformatter', component: CurrencyformatterComponent},
  { path: 'randomquotedisplay', component: RandomquotedisplayComponent},
  { path: 'uppercasegreeting', component: UppercasegreettingComponent},
  { path: 'divisiblechecker', component: DivisiblecheckerComponent},
  { path: 'moodtraker', component: MoodtrakerComponent},
  { path: 'colorpicker', component: ColorpickerComponent},
  { path: 'countercomponent', component: CountercomponentComponent},
  { path: 'toggle', component: ToggleComponent},
  { path: 'progressbar', component: ProgressbarComponent},
  { path: 'checklist', component: ChecklistComponent},
  { path: 'starrating', component: StarratingComponent},
  { path: 'tooglecontent', component: TooglecontentComponent},
  { path: 'countdown', component: CountdownComponent},




]
@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ChecklistComponent,
    CountercomponentComponent,
    HomepageComponent,
    ColorpickerComponent,
    ShowhellobuttonComponent,
    DisplayhelloworldComponent,
    DisplaynameComponent,
    CounterComponent,
    UserageComponent,
    UsegreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordrevserComponent ,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WorldshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonnaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreettingComponent,
    DivisiblecheckerComponent,
    SimpleformComponent,
    MoodtrakerComponent,
    ToggleComponent,
    ProgressbarComponent,
    StarratingComponent,
    TooglecontentComponent,
    CountdownComponent,




  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,

  ],

})

export class AppModule { }
