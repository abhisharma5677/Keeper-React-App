import React from 'react'

const Notes = (props) => {

  function clickEvent() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <div className='bg-[#fff] border rounded-[20px] w-2/5 lg:w-1/5 text-[40px] lg:text-[20px] mt-[40px] pl-[10px] float-left m-[30px]'>
        <h1 className='font-bold'>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={clickEvent}
          className='border bg-[#f5ba13] text-white px-[30px] lg:px-[10px] py-[5px] lg:py-[1px] rounded-[30px] my-[10px] border-none'>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default Notes