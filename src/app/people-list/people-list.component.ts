import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from './dialog-popup.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule, ReactiveFormsModule]
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  searchControl = new FormControl('');
  displayedColumns: string[] = ['nome', 'data_nasc', 'cpf', 'sexo', 'altura', 'peso', 'actions'];

  
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.loadPeople();
  }

  onSearch() {
    const query = this.searchControl.value;
    if (query) {
      this.apiService.searchPeople(query).subscribe(data => {
        this.people = data;
      });
    } else {
      this.loadPeople();
    }
  }

  // onSearch(event: any) {
  //   const query = event.target.value;
  //   if (query) {
  //     this.apiService.searchPeople(query).subscribe(data => {
  //       this.people = data;
  //     });
  //   } else {
  //     this.loadPeople();
  //   }
  // }

  loadPeople() {
    this.apiService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  deletePerson(id: number) {
    this.apiService.deletePerson(id).subscribe(() => {
      this.loadPeople();
    });
  }



  calculatePesoIdeal(person: any) {
    this.apiService.calculatePesoIdeal(person.altura, person.sexo).subscribe(
      (result) => {
        // Abrir popup com o resultado
        console.log(result.peso_ideal)
        this.openDialog(`Peso ideal: ${result.peso_ideal}`);
      },
      (error) => {
        console.error('Erro ao calcular peso ideal:', error);
        // Tratar erro, se necessário
      }
    );
  }

  openDialog(message: string): void {
    this.dialog.open(DialogPopupComponent, {
      width: '250px',
      data: { message }
    });
  }

}
