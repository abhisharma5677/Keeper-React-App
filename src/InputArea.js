import React, { useState } from 'react'
import { TiPlus } from 'react-icons/ti';

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
        <div className='flex justify-center mt-[25px] lg:mt-[15px]'>
            <form className='grid grid-row-2 gap-y-0 border bg-white w-fit h-fit rounded-[20px] mb-[100px] lg:mb-[50px] '>
                <div>
                    <div className='flex justify-center'>
                        <input name='title' placeholder='Title....' value={note.title} onChange={handleChange}
                            className='focus:outline-none mt-[5px] pl-[10px] text-[60px] lg:text-[30px] h-[100px] lg:h-[50px] w-[700px] text-black bg-white border-none ml-[5px] mr-[5px]'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <textarea name='content' placeholder='Write the title content...' rows="2" value={note.content} onChange={handleChange}
                            className='focus:outline-none w-[700px] mt-[0px] pl-[10px] text-[50px] lg:text-[20px] bg-white border-none ml-[10px] mr-[10px]'
                        />
                    </div>
                </div>
                <div>
                    <div className='flex justify-center mt-[10px]'>
                        <button type='Submit' onClick={handleClick}
                            className='border text-[50px] lg:text-[30px] text-white font-bold bg-[#f5ba13] p-[30px] lg:p-[0px] rounded-full mb-[5px] border-none'>
                            <TiPlus size={50}/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputArea
