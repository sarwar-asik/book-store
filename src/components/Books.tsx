import { useEffect, useState } from 'react';
import main_api from '../shared/mainAPi';
import { Link } from 'react-router-dom';

const Books = () => {
    let [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch(`${main_api}/books`)
        .then((res) => res.json())
        .then((books) => setBooks(books.data));
    }, []);
  
    // console.log(blogs, "from Blogs.js");
    // console.log(books,"form BBBBBBB");
  
    return (
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
        <h2 className="mt-1 text-3xl font-bold font-serif">Our Latest Book</h2>
        <p className="text-slate-700 mt-1 mb-4 font-mono">
          There are some popular books of mine . You can Explore our book from
          here. Our new Book will publish soon
        </p>
  
  
        {books?.length < 1 && (
          <div className="mt-1 text-xl font-bold font-serif text-center">
        <h2>Loading ..............</h2>
          </div>
        )}
  
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {/*  */}
          {books?.map((book, i) => {
            const {title,author,genre, publicationDate} = book
            return (
              <div className="flex flex-wrap -mx-4">
            
              <div className="w-full  px-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">{author}</p>
                  <p className="text-gray-600">{genre}</p>
                  <p className="text-gray-600">Publication Date: {publicationDate}</p>
                </div>
              </div>
              </div>
              
            );
          })}
        </div>
  
        
      </div>
    );
  };

export default Books;