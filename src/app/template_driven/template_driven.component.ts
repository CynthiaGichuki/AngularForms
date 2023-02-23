import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms"

@Component({
    selector: 'app-template_driven',
    templateUrl: 'template_driven.component.html',
    styleUrls: ['template_driven.component.css']
})
export class template_driven {
    default = 'default'
    genders = ['Male', 'Female']

    @ViewChild('form') form!: NgForm

    register() {
        console.log(this.form);
        this.form.reset()
    }

    prepopulate() {
        this.form.setValue({
            fullname: 'Cynthia Gichuki',
            gender: 'Female',
            role: "junior",
            email: 'gichukicynthia1@thejitu.com',
            password: 'Password@2023'
        })
    }

    //this.form.form.patchValue({
    //  fullname:'Cynthia Gichuki'
    //})

}