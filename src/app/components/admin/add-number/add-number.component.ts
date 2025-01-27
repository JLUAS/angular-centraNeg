import { Component } from '@angular/core';
import { UserRegister, AuthenticateUser } from '../../../models/User';
import { NumbersService } from '../../../services/numbers.service';

@Component({
  selector: 'app-add-number',
  templateUrl: './add-number.component.html',
  styleUrl: './add-number.component.css'
})
export class AddNumberComponent {
  modal:boolean=false


    constructor(private numbersService: NumbersService) {}

    user: UserRegister = { firstName: '', middleName:'', lastName:'', email: '', password: '', rol: '', authenticated: false, authCode: ''};
    errMessage: string = "";
    errPassword: boolean = false;
    errUser: boolean = false;
    errGeneral: boolean = false;
    isLoading: boolean = false;
    success: boolean= false;
    isUploading: boolean = false
    succMessage:string= ""
    passwordToggle: string = "password";
    visibility:string="visibility_off"
    togglePassword(){
      if(this.passwordToggle == "password"){
        this.passwordToggle = "text"
        this.visibility="visibility"
      }else{
        this.passwordToggle= "password"
        this.visibility="visibility_off"
      }
    }

    // Función para generar un código de autenticación aleatorio de 15 caracteres
    generateAuthCode(length: number = 15): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let authCode = '';
      for (let i = 0; i < length; i++) {
        authCode += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return authCode;
    }

    selectedFile: File | null = null;
    responseMessage: string | null = null;

    onFileSelected(event: Event): void {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        this.selectedFile = fileInput.files[0];
      }
    }

    uploadFile(): void {
      if (this.selectedFile) {
        this.isUploading = true;  // Inicia el proceso de carga
        this.numbersService.uploadExcel(this.selectedFile, "admin").subscribe({
          next: (response) => {
            this.responseMessage = 'Archivo subido exitosamente.';
            this.selectedFile = null;
            this.isUploading = false
          },
          error: (error) => {
            this.responseMessage = 'Error al subir el archivo: ' + error;
            this.isUploading = false
          },
        });
      }
    }

}
