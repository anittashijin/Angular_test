import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userModel } from '../users.model';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersListComponent  implements OnInit{

  allUsers:userModel[]=[]





  constructor(private api:ApiService){}
ngOnInit():void{
  this.getAllUsers()
}
getAllUsers(){
  this.api.getAllUsersAPI().subscribe((result:any)=>{
    this.allUsers =result.filter((user:any)=>user.id!="1")
    console.log(this.allUsers);

  })
}
deleteUser(id:any){
  this.api.removeUserAPI(id).subscribe((result:any)=>{
    this.getAllUsers()
  })
  }


}