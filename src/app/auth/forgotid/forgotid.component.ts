import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-forgotid',
  templateUrl: './forgotid.component.html',
  styleUrls: ['./forgotid.component.css']
})
export class ForgotidComponent implements OnInit {

  isError: boolean
  // forgot: any;

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  public xyz(): void{
      this.router.navigateByUrl('');
      this.toastr.success('Check Your Inbox');
    
  }
}
