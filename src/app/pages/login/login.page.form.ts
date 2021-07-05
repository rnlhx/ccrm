import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]] ,
            password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]

        })
    }
}
