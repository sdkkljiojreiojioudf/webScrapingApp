import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import { GET_KEYWORDS} from './CRUD'
import KeyWordGraph from './KeyWordGraph'

const KeyWordList = () => {
    

    const {loading, error, data }= useQuery(GET_KEYWORDS);
    console.log(data);

if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  else return (
    <>
      <div className="containerCentered">
        {data.keywords.map(elem => (
          <KeyWordGraph key={elem.id} elem={elem} />
        ))}
      </div>
    </>
  )
}

export default KeyWordList
