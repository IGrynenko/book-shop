import { FormControl, FormGroup, Validators } from "@angular/forms";

import { BookType, IBook } from "src/app/modules/shared/models";

export class ProductBase {
    
    public productForm: FormGroup;

    constructor() {
        this.productForm = new FormGroup({
            id: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            category: new FormControl('', [Validators.required]),
            createDate: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            isAvailable: new FormControl(''),
            price: new FormControl('', [Validators.required])
        });
    }
    
    createBook(): IBook {
        const book: IBook = {
            id: +this.productForm.controls.id.value,
            category: +this.productForm.controls.category.value,
            createDate: this.productForm.controls.createDate.value,
            description: this.productForm.controls.description.value,
            isAvailable: !!this.productForm.controls.isAvailable.value,
            name: this.productForm.controls.name.value,
            price: +this.productForm.controls.price.value
        };
        return book;
    }
}