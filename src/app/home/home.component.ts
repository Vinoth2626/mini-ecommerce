import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  products:any = [];
  searchText: string='';
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => {
      console.log('data',data);
      this.products = data.product;
    // this.apiService.currentProducts.subscribe((data:any) => {
    //    this.products = data.products;
    // })
    
      })
    }
    search(){
      this.apiService.searchProducts(this.searchText).subscribe((res:any)=>{
      this.products = res.product;
      })
    }
    clearSearch(){
      if(this.searchText == ''){
        this.search();
      }
    }

}
