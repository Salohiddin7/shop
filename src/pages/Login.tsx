import  {  useState, type FC } from 'react'
import LayoutForm from "../layouts/LayoutForm"
import { useForm } from "react-hook-form"
import CustomInput from "../components/UI/CustomInput"
import CustomButton from "../components/UI/CustomButton"
import { Link, useNavigate } from "react-router-dom"
import type { ILogin } from "../types"
import { loginUser } from "../api/common"
import { errorHandler } from "../utils/errorHandler"

const Login:FC = () => {
    
    const navigate = useNavigate()
    const [errorText, setErrorText] = useState('')
    const { mutateAsync } = loginUser()
    const { 
        register, 
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<ILogin>()
    
    const submit = async(data:ILogin) => {
        try {
            await mutateAsync(data)
            navigate('/')
        } catch (error:any) {
            let text = errorHandler(error.response, 'login')
            setErrorText(text)
        }
        
    }
   
  return (
    <>
        <LayoutForm>
            <div className="layoutForm__box">
                <h2 className="layoutForm__box-title">Вход</h2>
                <form onSubmit={handleSubmit(submit)}  className="layoutForm__box-form">
                    <CustomInput
                        text="Ваш логин"
                        placeholder="Логин"
                        type="text"
                        error={errors.username}
                        register={register('username', {
                            required: 'Поле обязательное для заполнения',
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            }
                        })}
                    />
                    <CustomInput
                        text="Ваш пароль"
                        placeholder="Пароль"
                        type="password"
                        error={errors.password}
                        register={register('password', {
                            required: 'Поле обязательное для заполнения',
                            minLength: {
                                value: 8,
                                message: 'Минимум 8 символов'
                            }
                        })}
                    />
                    <CustomButton
                        width={248}
                        height={60}
                        text="Вход"
                        center={true}
                    />
                </form>
                <div className="layoutForm__box-info">
                    {errorText && <p className="layoutForm__box-info-error">{errorText}</p>}
                    <p className="layoutForm__box-info-text">Нет акканута? </p>
                    <Link to="/register" className="layoutForm__box-info-link">Зарегистрироваться</Link>
                </div>
            </div>
        </LayoutForm>
    </>
  )
}

export default Login