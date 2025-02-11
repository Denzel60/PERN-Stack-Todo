import React from 'react'


// eslint-disable-next-line react/prop-types
const ListHeader = ({ listName }) => {
    const signOut = () =>{
        console.log(signOut);
    }



  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className="button-container">
        <button className='create'>ADD NEW</button>
        <button className='signout' onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  )
}

export default ListHeader
