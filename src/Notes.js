import React from 'react'

const Notes = (props) => {

  function clickEvent() {
    props.onDelete(props.id);
  }

  return (
    <div className='relative flex justify-center z-10'>
      <div className='bg-[#fff] border rounded-[20px] w-9/12 text-[50px] mt-[40px] pl-[10px] float-left'>
        <h1 className='font-bold'>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={clickEvent}
          className='border bg-[#f5ba13] text-white px-[30px] py-[5px] rounded-[30px] my-[10px] border-none'>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default Notes