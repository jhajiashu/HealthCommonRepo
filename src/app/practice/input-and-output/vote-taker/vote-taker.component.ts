import { Component } from '@angular/core';
 
@Component({
  selector:'app-vote-taker',
  templateUrl: 'vote-taker.component.html',
  styleUrls: ['vote-taker.component.css']
})
export class VoteTakerComponent{
    public agreed = 0;
    public disagreed = 0;
    public voters = ['Ashu' , 'Amit' , 'Raman' , 'Tapish' , 'Surbhi'];
  
    public onVoted(vote: boolean){
      vote ? this.agreed++ : this.disagreed++;
    }
  }