import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { userModel } from '../users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddUserComponent implements OnInit {
user:userModel={}
allusers:any=[]

constructor(private api:ApiService,private router:Router){}
ngOnInit():void{
this.api.getAllUsersAPI().subscribe((result:any)=>{
  this.allusers=result
})
}




addUser(){

const existingUser=this.allusers.find((item:any)=>item.id==this.user.id)
if(existingUser){
  alert("Id already exist!!! use unique id to add user")
}else{
  this.api.saveUserAPI(this.user).subscribe({
    next:(result:any)=>{
      console.log(result);
      alert(`${result.name} has successfully added to our DB`)
     this.router.navigateByUrl('/list')

    },
    error:(err:any)=>{
      console.log(err);

    }
  })
}


}
cancel(){
  this.user={}

}


}
