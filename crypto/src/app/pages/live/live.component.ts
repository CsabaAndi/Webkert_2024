import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { getData } from '../../scripts/api-test';
import { Exchange } from '../../shared/models/CryptoExchange';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
  
})


export class LiveComponent implements OnInit {

  displayedColumns3: string[] = ["From", "To", "Rate"];
  dataSource3 = new MatTableDataSource<Exchange>;
  private _crydata:  Exchange[] = [];

  loading: boolean = false;


  constructor() { 
    this.loading = true;
    getData(50).then(data => {
      data.forEach((element: any, CryptoExchange: Exchange) => {
        CryptoExchange = {"From": element.currency_from, "To": element.currency_to, "Rate": element.rate}
        this._crydata.push(CryptoExchange)
      })
      //console.log(this.crydata)
      this.loading = false;
      this.dataSource3 = new MatTableDataSource<Exchange>(this._crydata);
    });

  }

  ngOnInit(): void {
   
  }
  
}

