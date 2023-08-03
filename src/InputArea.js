import React, { useState } from 'react'

const InputArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;

        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            }
        });
    }

    function handleClick(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote(() => {
            return {
                title: "",
                content: ""
            }
        })
    }

    return (
        <div className='formContainer'>
            <form>
                <div className='flex justify-center'>
                    <input name='title' placeholder='Title....' value={note.title} onChange={handleChange}
                        className='mt-[40px] pl-[10px] text-[60px] h-[100px] w-[600px] text-white bg-[#f5ba13] border-none ml-[100px] mr-[100px]'
                    />
                </div>
                <div className='flex justify-center'>
                    <textarea name='content' placeholder='Write the title content...' rows="3" value={note.content} onChange={handleChange}
                        className='w-[600px] mt-[0px] pl-[10px] text-[50px] bg-[#f5ba13] border-none ml-[70px] mr-[70px]'
                    />
                </div>
                <div className='flex justify-center'>
                    <button type='Submit' onClick={handleClick}
                        className='border text-[70px] text-white font-bold bg-[#f5ba13] p-[30px] rounded-full mb-[100px] border-none'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InputArea
