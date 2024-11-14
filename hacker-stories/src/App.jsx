import * as React from 'react'; 

//const title = 'React'; 

function getTitle(title){
  return title; 
}

const list = [
{
  title: 'React', 
  url: 'https://reatjs.org/', 
  author: 'Jordan Walke', 
  num_comments: 3, 
  points: 4, 
  objectID: 0, 
},
{
  title: 'Redux', 
  url: 'https://redux.js.org/', 
  author: 'Dan Abramov, Andrew Clark', 
  num_comments: 2, 
  points: 5, 
  objectID: 1, 
}
];

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName; 
    this.lastName = lastName; 
  }

  getName(){
    return this.firstName + ' ' + this.lastName; 
  }

}

const robin = new Person('Robin', 'Wieruch');
console.log(robin.getName()); 

const dennis = new Person('Dennis', 'Wieruch'); 
console.log(dennis.getName());


const App = () =>{
  return(
      <div>
      <h1>My Hacker Stories</h1>

      <Search />
      
      <hr/>

     <List/>
      
      </div>
    )
}

//Adding new List() Component 
const List = () =>{
  return (
    <ul>
    {list.map((item) => {
      return ( 
      <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      </li>
    );
    })}
    </ul>
  );
}

//Search Component 
const Search = () =>{
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" /> 
    </div>
  )
}

export default App; 