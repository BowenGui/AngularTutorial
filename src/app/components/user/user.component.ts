import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({ //dont change anything in @component
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

//NOTE: don't change class/method names that I didn't write myself.
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies:string[];
  random: any; //any can be used to store any type into the variable
  posts: Post[];
  isEdit: boolean;

  //used for injecting dependencies
  constructor(private dataService:DataService) {
    console.log("User constructor ran...");
  }

  //best used for initializing information; not in constructor
  ngOnInit() {
    console.log("User ngOnInit ran...");

    this.name = 'John Doe';
    this.age = 30;
    this.email = "example@example.com";
    this.address = {
      street: '50 main street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = [
      'Write code',
      'Watch movies',
      'Listen to music'
    ];
    this.random = 1;

    //observables require a subscriber
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });

    this.isEdit = false;
  }

  onClick() {
    console.log("clicked");
    this.email = "clicked@example.com";
    this.hobbies.push('new hobby'); //adds to end of array
  }

  addHobby(hobby:string) {
    console.log(hobby);
    this.hobbies.unshift(hobby); //adds to the beginning of array
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1); //splice is similiar to delete; removes one ith element
      }
    }
    return false;
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
