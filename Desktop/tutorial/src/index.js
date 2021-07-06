import React from 'react';
import ReactDom from 'react-dom';

//css, this means the file is in the same folder, I.E the css folder
//is in the src folder with all the rest
import './index.css';
/*
refactoring individual objects into an array by wrapping our objects in
an opening square bracket and a closing square bracket,
and also removing each closing semi-colon and replacing them with
a single comma


*/

//these books are the current top three of amazons booklist,
//please do not consider the inclusion an endorsement of candace owens
//or conservative values, I do not share them personally. No Marxism = No weekends off

const books = [
{   id:1,
    img:'https://images-na.ssl-images-amazon.com/images/I/81caWwaOOKL._AC_UL200_SR200,200_.jpg ',
    title:'Once Upon a Time in Hollywood',
    author:'Quentin Tarantino',
},
{   id:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/81TgUz%2B7JBS._AC_UL200_SR200,200_.jpg ',
    title:'American Marxism',
    author:'Mark R. Levin',
},

{   id:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/71R8H1PuNdS._AC_UL200_SR200,200_.jpg',
    title:'Speechless: Controlling words, Controlling Minds',
    author:'Michael Knowles',
},
];

function BookList (){
return (
    <section className ='booklist'>
         {books.map((book) => {
            
             return( 

                <Book key = {book.id}

             /*spread property, ... is each property of the object, all all all,  */
                  {...book}>
                 </Book>
         );
            })}
            
             </section>

);
}


const Book = ({img, title,author}) => {
    //attribute, eventHandlers
    //onClick,OnMouseOver
    //const    {img,title,author} = props;
    const clickHandler =() => {
        alert('hello world');
    };

    return( 
    <article className='book'>
    <img src ={img} alt =''/>
    <h1 onClick ={()=>console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>
        reference example
    </button>
    </article>
    );
};


 


//this is an invocation
ReactDom.render(<BookList/>,document.getElementById('root'));


       {/*
        refactored around 2:37, removed this to go to iterating objects in an array
        this is the children property object.It is not explicitly named 
        by the user, children is implicit in jsx, a contextual thing depending on 
        where it is located.
        the children prop is everything that we 
        render in between the opening and closing tag of
        the component. But only one of them will have that 
        description.
        Notice that the children property is in between the Book properties opening and closing tags 
        We must access this, the children property is in the book object

        const Book =({img,title,author,children}) =>{
              <p> Properties are the values associated 
           with a Javascript object. A Javascript object is a collection of unordered properties.Properties can usually be 
           changed, added and deleted, but some are read only. 'objectName.property is person.age'. </p>
           {children
    /*
    moving this component will change where it is displayed on the page.
    
    
     <Book 
       img={firstBook.img} 
       title={firstBook.title} 
       author = {firstBook.author}
       >
    
     
       </Book >
      
           <Book
        img={secondBook.img} 
        title={secondBook.title} 
        author = {secondBook.author} />
  
        
        
const names = ['john', 'peter', 'mary', 'judas', 'paul'];
const newNames = names.map((name)=>{
    return<h1> 
       {name} 
    </h1>
});
console.log(newNames);


   // const {img, title, author}=props;
   {/*object destructuring in Javascript on line 44 and 45
    this makes its so I dont have to call title.props and author.title
    for every line of html, i sorta like using object parameters in the const book parameter.
  

*/}