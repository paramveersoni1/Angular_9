import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

   

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']

})

export class CreateComponent implements OnInit {
  myForm : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      body: this.formBuilder.array([]),
      title: [this.data?.title ? this.data?.title : '', [Validators.required]],
      index:[ this.data?.index]
    });
    
    if(this.data?.body){
      this.setFormValue(this.data);
    } else { 
      this.addNestedField();
    }

  }
  setFormValue(data: any) {
    data?.body.forEach(e => {
      this.nestedFields.push(
        this.formBuilder.group({
          nestedFieldControl: [e.nestedFieldControl, [Validators.required]]
        })
      )
    })
    }

  get nestedFields() {
    return this.myForm?.get('body') as FormArray;
  }

  addNestedField() {
    const nestedField = this.formBuilder.group({
      nestedFieldControl: ['', [Validators.required]]
    });
    this.nestedFields.push(nestedField);
  }

   

  get f(){
    return this.myForm?.controls;
  }

  RemoveData(i) {
    this.nestedFields.removeAt(i);
  }

  submit(){

    console.log(this.myForm.value);
this.dialogRef.close(this.myForm.value);

  }

  

}