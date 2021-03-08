import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  
  loginForm: FormGroup;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }
  login() {
  
      this.isError = false;
      this.router.navigateByUrl('');
      this.toastr.success('Login Successful');
    error => {
      this.isError = true;
      throwError(error);
    }
  }
  protected xyz(): void{
    // document.getElementById("popup-1").classList.toggle("active");
    this.router.navigateByUrl('');
    this.toastr.success('Your report has been submitted');
}

protected cls(): void{
  document.getElementById("popup-1").classList.toggle("active");
  this.router.navigateByUrl('');
}

protected reported(): void{
 console.log('report submitted');
}
     
}
