import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({mvl,filterstar,rating,setRate, input,setInput , filterstars }) => {

  return (
    <div className='div'>
        {    mvl.filter( 
        (el) =>  
         { if  (input == '' && rating == 0 )
          { return el}
    
          else if ( (el.rating <= rating ) &&  (el.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())) )
          {return el}
        }
        
        ).map((el,i)=> <MovieCard el={el} key={i} />
            )
        }
    </div>
  )
}

export default MovieList