import React, { useState, forwardRef } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = forwardRef(({ type, ...props }, ref) => {

    if(type === 'file'){
        return <input type='file' ref={ref} {...props} />; 
    }

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
    const isFile = type === 'file';

    return (
        <div>
            {props.label && <label className="text-[13px] text-slate-800">{props.label}</label>}
            <div className="input-box">
                <input
                    type={inputType}
                    ref={ref}
                    {...props}
                    className={
                        isFile
                            ? props.className  
                            : `w-full bg-transparent outline-none ${props.className || ''}` 
                    }
                />
                {type === "password" && (
                    <>
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className="text-primary cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className="text-slate-400 cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
});

export default Input;