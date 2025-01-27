import { Component, OnInit } from '@angular/core';
import { NuevosNumeros } from '../../../models/Number';
import { NumbersService } from '../../../services/numbers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevos-numeros',
  templateUrl: './nuevos-numeros.component.html',
  styleUrl: './nuevos-numeros.component.css'
})
export class NuevosNumerosComponent implements OnInit{

  constructor(private numbersService: NumbersService){}
  ngOnInit(): void {
    this.loadNumbers()
  }

  numbers: NuevosNumeros[] = [];
  paginatedData: NuevosNumeros[] = [];
  editNumber: NuevosNumeros = { id: 0, nombre: '', numero: 0 };
  deleteNumber: NuevosNumeros = { id: 0, nombre: '', numero: 0 };
  isAdmin: boolean = false;
  isRoot: boolean = false;
  isEditModal: boolean = false;
  isDeleteModal: boolean = false;
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  loadNumbers(): void {
    this.isLoading = true;
    const rol = localStorage.getItem('rol')
    if(rol){
      this.numbersService.getNewNumbers(rol).subscribe(
        (numbers: NuevosNumeros[]) => {
          this.numbers = numbers;
          this.totalPages = Math.ceil(this.numbers.length / this.pageSize);
          this.paginateData();
          this.isLoading = false;
        },
        (error) => {
          console.error('Error al cargar los numeros:', error);
          this.errorMessage = 'Error al cargar los numeros.';
          this.isLoading = false;
        }
      );
    }
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
    this.calculateTotalPages();
  }


  calculateTotalPages(): void {
    const totalItems = this.numbers.length;
    this.totalPages = Math.ceil(totalItems / this.pageSize);
    this.paginateData()
  }

  paginateData(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.numbers.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateData();
    }
  }

  editModal(user: NuevosNumeros): void {
    this.editNumber = { ...user }; // Copiar los datos del usuario a editar
    this.isEditModal = true;
  }

  deleteModal(user: NuevosNumeros): void {
    this.deleteNumber = { ...user }; // Copiar los datos del usuario a editar
    this.isDeleteModal = true;
  }

  closeEditModal(): void {
    this.isEditModal = false;
  }

  closeDeleteModal(): void {
    this.isDeleteModal = false;
  }

  deleteNumberChange(form: NgForm): void {
      if (this.deleteNumber) {
        console.log(this.deleteNumber.id)
        this.numbersService.deleteNumber(this.deleteNumber.id).subscribe(
          (response) => {
            console.error('Error al eliminar usuario:', response);
            this.errorMessage = 'No se pudo eliminar el usuario.';
          },
          (error) => {
            this.closeEditModal();
            this.loadNumbers()
          }
        );
      }else{
        this.errorMessage = 'No se pudo eliminar el usuario, datos no validos.';
      }
  }
}
