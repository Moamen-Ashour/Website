import { Component, OnInit } from '@angular/core';
import { PViewService } from '../p-view.service';


@Component({
  selector: 'app-pview',
  templateUrl: './pview.component.html',
  styleUrls: ['./pview.component.css']
})
export class PViewComponent implements OnInit {
  
  
  public products= [];
  
 
  slideConfig = {};
  
  constructor(private productInfo : PViewService) { 
  
    
  this.slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
    {
    breakpoint: 768,
    settings: {
    slidesToShow: 4
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 3
    }
    }
    ]
    };
  
  }
  
  ngOnInit(){
    
    this.productInfo.getProduct()
    .subscribe(data => this.products = data['data']);   
    
  }
  
}

