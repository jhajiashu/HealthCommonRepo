import { Component , Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: 'voter.component.html',
  styleUrls: ['voter.component.css']
})
export class VoterComponent {
    @Input() name: string;
    @Output() onVoted = new EventEmitter<boolean>()
    public voted = false;
  
    public vote(vote: boolean): void{
      this.onVoted.emit(vote);
      this.voted = true;
    }
  }