import * as React from 'react'; 

//const title = 'React'; 

function getTitle(title){
  return title; 
}



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
  const stories = [
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

    const handleSearch = (event) => { 
      console.log(event.target.value);
    }

  return(
      <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />
      
      <hr/>
        {/*using props to pass the list of items to the List component. */} 
     <List list={stories}/>
      
      </div>
    )
}

//Adding new List() Component 
//props in React allow you to pass variables as information from one component to another.
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
); 

const Item = (props) => (
  <li>
    <span> 
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

//Search Component 
const Search = (props) =>{
  //useState is telling react that we want to have a stateful value which changes over time
  const [searchTerm, setSearchTerm] = React.useState(''); 

  const handleChange = (event) => {
   const [searchTerm, setSearchTerm] = React.useState(''); 

   const handleChange = (event) => {
    setSearchTerm(event.target.value); 

    props.onSearch(event); 
   }
  }
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/> 
    </div> 
  )
}

export default App; 