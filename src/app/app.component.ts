import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-first';
  beers = ['Corona', 'Heineken', 'Stella'];
  counter: number = 0;
  votes: string[] = [];
  Increment() {
    this.counter++;
  }
  Decrement() {
    this.counter--;
  }
  Vote(beer: string) {
    console.log(`Voted for ${beer}`);
    this.votes.push(beer);
  }
  CountVotes(beer: string) {
    return this.votes.filter((vote) => vote === beer).length;
  }
}
