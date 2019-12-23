import React, {useState} from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries'


const AddBook = ({data}) => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const displayAuthors = () => {
    if(data.loading){
      return (<option disabled>Loading Authors</option>)
    }else{
      return data.authors.map(author => {
        return(
        <option key={author.id} value={author.id}>{author.name}</option>
        );
      });
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="fields">
        <label htmlFor="">Book name:</label>
        <input type="text" onChange={ e => setName(e.target.value)}/>
      </div>

      <div className="field">
        <label htmlFor="">Genre:</label>
        <input type="text" onChange={ e => setGenre(e.target.value)}/>
      </div>

      <div className="field">
        <label htmlFor="">Author:</label>
        <select onChange={ e => setAuthorId(e.target.value)}>
          <option value="">select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>

    </form>

  );
}

export default graphql(getAuthorsQuery)(AddBook);
