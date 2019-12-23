import React from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';


const getAuthorsQuery = gql`
  {
    authors{
      name,
      id
    }
  }
`

const AddBook = ({data}) => {
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

  return (
    <form id="add-book">
      <div className="fields">
        <label htmlFor="">Book name:</label>
        <input type="text"/>
      </div>

      <div className="field">
        <label htmlFor="">Genre:</label>
        <input type="text"/>
      </div>

      <div className="field">
        <label htmlFor="">Author:</label>
        <select name="" id="">
          <option value="">select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>

    </form>

  );
}

export default graphql(getAuthorsQuery)(AddBook);
