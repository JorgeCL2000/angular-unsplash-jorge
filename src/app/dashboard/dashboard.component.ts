import { Component,OnInit } from '@angular/core';
import { ImageComponent } from '../image/image.component';
@Component({
  selector: 'app-dashboard',
  imports: [ImageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  //array para almacenar las imagenes

  images: any[] = [];
  
  getImages(){

    const url ="https://api.unsplash.com/photos/random?client_id=X514kMHOmvk7FQqz-la7TrBOtE1-0g306M8rOkQ2bWw&count=12";
    fetch(url)
    .then(response=>{
      if(!response.ok){
        throw new Error('Ha existido un error')
      }

      return response.json();
    })
    .then((data: any[]) =>{

      this.images = data;
      console.log(this.images);

    })

    .catch(error =>{
      console.error(error)
    })
  }

  ngOnInit(){
    this.getImages();
  }
  reload(){
    this.getImages();
  }
}
