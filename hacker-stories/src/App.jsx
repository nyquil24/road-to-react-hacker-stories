/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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

    const [searchTerm, setSearchTerm] = React.useState('React'); 

    const handleSearch = (event) => { 
      setSearchTerm(event.target.value);
    }

    const searchedStories = stories.filter((story)=> 
    story.title.toLowerCase().includes(searchTerm.toLowerCase()
  ))

  return(
      <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>
      
      <hr/>
        {/*using props to pass the list of items to the List component. */} 
     <List list={searchedStories}/>
      
      </div>
    )
}

const Search = ({search, onSearch}) => {
 
  return(
  <div> 
    <label htmlFor="search">Search: </label>
    <input id="search" 
    type="text" 
    value={search}
    onChange={onSearch} />
  
  </div>
)
}
//Adding new List() Component 
//props in React allow you to pass variables as information from one component to another.
const List = ({list}) => (
  <ul>
    {list.map((item) => (
     <Item key={item.objectID} {...item} /> 
    ))}
  </ul>
); 

const Item = ({title, url,author,num_comments, points}) => (
  <li>
    <span> 
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);


export default App; 