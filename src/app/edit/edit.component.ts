import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { userModel } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUserComponent implements OnInit {
user:userModel={}

  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router){}
  ngOnInit():void{
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id}=result
      console.log(result);
     this.getUserDetails(id)

    })
  }

  getUserDetails(id:any){
    this.api.getAUserAPI(id).subscribe((result:any)=>{
      this.user=result
      console.log(this.user);

    })
  }



  cancel(id:any){
this.getUserDetails(id)
  }



updateUser(){
  this.api.updateUsersAPI(this.user).subscribe((result:any)=>{
    alert("user updated succcessfully!!!!")
this.router.navigateByUrl('/list')
  })
}



}