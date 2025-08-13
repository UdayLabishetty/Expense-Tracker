// import React, { useState } from 'react'
// import EmojiPicker from 'emoji-picker-react';
// import { LuImage, LuX } from 'react-icons/lu';
// import Draggable from 'react-draggable';

// const EmojiPickerPopup = ({icon, onSelect}) => {
//     const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='flex flex-col md:flex-row items-start gap-5 mb-6'>
//       <div className='flex items-center gap-4 cursor-pointer'
//         onClick={() => setIsOpen(true)}
//       >
//         <div className='w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lb'>
//             {icon ? (
//                 <img src={icon} alt="Icon" className='w-12 h-12' />
//             ) : (
//                 <LuImage />
//             )}
//         </div>
//         <p className=''>{icon ? "Change Icon" : "Pick Icon"}</p>
//       </div>
//       {/* {isOpen && (
//         <div className='relative'>
//             <button
//                 className='w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer'
//                 onClick={() => setIsOpen(false)}
//             >
//                 <LuX />
//             </button>
//             <EmojiPicker 
//                 open={isOpen}
//                 onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || "")}
//             />
//         </div>
//       )} */}
//       {isOpen && (
//                 <Draggable handle=".handle">
//                     <div className='fixed top-1/4 left-1/4 z-50 bg-white shadow-2xl rounded-lg border border-gray-300'>
//                         {/* Draggable Handle */}
//                         <div className="handle p-2 bg-gray-100 cursor-move rounded-t-lg flex justify-end">
//                             <button
//                                 className='w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200'
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 <LuX />
//                             </button>
//                         </div>

//                         {/* Emoji Picker */}
//                         <EmojiPicker
//                             open={isOpen}
//                             onEmojiClick={(emoji) => {
//                                 onSelect(emoji?.imageUrl || "");
//                                 setIsOpen(false); // Close picker after selection
//                             }}
//                         />
//                     </div>
//                 </Draggable>
//             )}
//     </div>
//   )
// }

// export default EmojiPickerPopup




import React, { useState, useRef } from 'react'; // 1. Import useRef
import EmojiPicker from 'emoji-picker-react';
import { LuImage, LuX } from 'react-icons/lu';
import Draggable from 'react-draggable';

const EmojiPickerPopup = ({ icon, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null); // 2. Create the ref

    return (
        <div className='flex flex-col md:flex-row items-start gap-5 mb-6'>
            <div className='flex items-center gap-4 cursor-pointer'
                onClick={() => setIsOpen(true)}
            >
                <div className='w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg'>
                    {icon ? (
                        <img src={icon} alt="Icon" className='w-12 h-12' />
                    ) : (
                        <LuImage />
                    )}
                </div>
                <p>{icon ? "Change Icon" : "Pick Icon"}</p>
            </div>

            {isOpen && (
                // 4. Pass the ref to the Draggable component
                <Draggable nodeRef={nodeRef} handle=".handle">
                    {/* 3. Attach the ref to the element you want to drag */}
                    <div ref={nodeRef} className='fixed top-1/4 left-1/4 z-50 bg-white shadow-2xl rounded-lg border border-gray-300'>
                        {/* Draggable Handle */}
                        <div className="handle p-2 bg-gray-100 cursor-move rounded-t-lg flex justify-end">
                            <button
                                className='w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200'
                                onClick={() => setIsOpen(false)}
                            >
                                <LuX />
                            </button>
                        </div>

                        {/* Emoji Picker */}
                        <EmojiPicker
                            open={isOpen}
                            onEmojiClick={(emoji) => {
                                onSelect(emoji?.imageUrl || "");
                                setIsOpen(false); // Close picker after selection
                            }}
                        />
                    </div>
                </Draggable>
            )}
        </div>
    )
}

export default EmojiPickerPopup;
