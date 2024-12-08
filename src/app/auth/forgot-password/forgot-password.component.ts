import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordRecoveryService } from '../password-recovery.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
   
  constructor(private fb: FormBuilder, private passwordRecoveryService: PasswordRecoveryService){
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    if(this.forgotPasswordForm.valid){
      const email = this.forgotPasswordForm.value.email;
      this.passwordRecoveryService.sendRecoveryEmail(email).subscribe({
        next: (Response) =>{
          console.log('Recovery email sent:', Response);
          alert('coreo de recuperacion enviado. porfavor revisa tu bandeja de entrada.');
        },
        error: (err) =>{
          console.error('error senting recovery emailk:', err);
          alert('Hubo un error al enviar el correo. Intenta nuevamente.');
        },
      });
    } 
  }
  
}
