import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
   formdata:any;
   message="";

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      username:new FormControl("",[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      password:new FormControl("",[Validators.required, Validators.minLength(5)])
    })
  }
  onClickSubmit(data:any){
  
    this.api.post("admin/login",{data:data}).subscribe((result:any)=>{
      console.log(result);
      if(result.data.status=="success"){
        localStorage.setItem("usertype","admin");
        alert("success");
      }
      else{
        this.message="Username of password is wrong"
      }

    },(err)=>{
      console.log(err);
    })
  }
  get user(){
    return this.formdata.get('username')
   
  }
  get pass(){
    return this.formdata.get('password')
  }

}
