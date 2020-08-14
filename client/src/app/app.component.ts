import { Component } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { VideohubConnectionService } from './videohub-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title: string = 'blackmagic-videohub';
  src_buttons:string[] = ["Chrome cast", "NUC 2 Primary", "NUC 2 Secondary", "Karl XII", "Trasig 5", "Trasig 6", "NUC 1 Primary", "NUC 1 Secondary", "9", "10"];
  dst_buttons:string[] = ["Kök", "Vardagsrum", "Entré", "Kontor L", "Kontor R", "6", "7", "8", "9", "10"];
  lastSelectedSrcBtn:string = "";
  lastSelectedDstBtn:string = "";
  selectedSrc = 0;
  selectedDst = 0;

  constructor(private router:VideohubConnectionService){

  }

  ngOnInit(){

  }

  onSelectSrc(name, index){
    console.log(name)
    this.selectedSrc = index;
    this.lastSelectedSrcBtn = name;

    this.selectedDst = 0;
    this.lastSelectedDstBtn = "";
  }

  onSelectDst(name, index){
    this.selectedDst = index;
    this.lastSelectedDstBtn = name;

    console.log("Calling changeRoute");
    this.router.changeRoute(this.selectedSrc, this.selectedDst)
      .subscribe((data)=>{console.log(data);});
  }

  onReconnect(){
    this.router.reconnect()
  }

}
