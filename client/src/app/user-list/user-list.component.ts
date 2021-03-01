import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserModel } from '../models/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  students: UserModel[] = [];
  isEdit = false;
  studentId: any;
  studentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    marathi: new FormControl('', [Validators.required, this.numValidation()]),
    english: new FormControl('', [Validators.required, this.numValidation()]),
    hindi: new FormControl('', [Validators.required, this.numValidation()]),
    math: new FormControl('', [Validators.required, this.numValidation()]),
    science: new FormControl('', [Validators.required, this.numValidation()]),
  });
  constructor(
    private __apiService: ApiService,
    private __router: Router,
    private __toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList() {
    this.__apiService.request('get', 'users').subscribe((responce: any) => {
      this.students = responce.data;
    })
  }

  calculatePercentage(marathi: any, english: any, hindi: any, math: any, science: any) {
    return (parseInt(marathi) + parseInt(english) + parseInt(hindi) + parseInt(math) + parseInt(science)) / 5
  }
  onSubmit() {
    if (this.isEdit) {
      let postData = {
        id: this.studentId,
        user: this.studentForm.value
      }
      this.__apiService.request('put', 'update-user', postData).subscribe((responce: any) => {
        this.__toast.showSuccess('Student details updated successfully');
        this.resetAll();
      })
    } else {
      this.__apiService.request('post', 'create-user', this.studentForm.value).subscribe((responce: any) => {
        this.__toast.showSuccess('Student details save successfully');
        this.resetAll();
      })
    }
  }

  editStudent(data: UserModel) {
    this.isEdit = true;
    this.studentId = data._id,
      this.studentForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        marathi: data.marathi,
        english: data.english,
        hindi: data.hindi,
        math: data.math,
        science: data.science
      })

  }

  resetAll() {
    this.isEdit = false;
    this.studentId = null;
    this.studentForm.reset();
    this.getStudentList();

  }
  logout() {
    this.__router.navigateByUrl('/');
  }

  numValidation() {
    return Validators.pattern("^[0-9]*$")
  }

}
