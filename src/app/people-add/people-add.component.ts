import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PeopleAddComponent {
  person = {
    nome: '',
    data_nasc: '',
    cpf: '',
    sexo: '',
    altura: null,
    peso: null
  };

  constructor(private apiService: ApiService, private router: Router) {}

  addPerson() {
        
    this.apiService.addPerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
    
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
