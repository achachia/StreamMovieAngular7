import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ObjetContact = {

    nom : "",
    email :"",
    objet_message : "",
    body_message : ""
};

isvalid = false;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {}

  public onFormSubmit() {      

      this.movieService.sendFormulaireContact(this.ObjetContact).subscribe((data) => {

             //this.movies = data;

             //this.isvalid = true;

             this.isvalid=true;

             this.ObjetContact.nom ="";

             this.ObjetContact.email ="";

             this.ObjetContact.objet_message ="";

             this.ObjetContact.body_message ="";


  
        });

        





  }

}
