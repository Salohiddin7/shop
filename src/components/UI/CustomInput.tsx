import { type FC } from 'react'


interface ICustomInputProps {
    text: string;
    placeholder: string;
    type: string;
    error: any;
    register: any;
}

const CustomInput: FC<ICustomInputProps> = ({ text, placeholder, type, error, register }) => {
    return (
        <>
            <div className="layoutForm__box-field">
                <span className="layoutForm__box-field-span">{text}</span>
                <input
                    type={type}
                    className="layoutForm__box-field-input"
                    placeholder={placeholder}
                    {...register}
                />
                {error &&
                    <p className="layoutForm__box-field-error">
                        {error?.message}
                    </p>
                }
            </div>
        </>
    )
}

export default CustomInput