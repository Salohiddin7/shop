import { type FC, type ReactNode } from 'react'
import { logoIcon } from "../utils/img"
import './LayoutForm.scss'

interface ILayoutFormProps {
    children: ReactNode
}

const LayoutForm:FC<ILayoutFormProps> = ({ children }) => {
  return (
    <>
    <div className="layoutForm">
        <div className="layoutForm__left">
            <img src={logoIcon} alt="" className="layoutForm__left-img" />
        </div>
        <div className="layoutForm__right">
            { children }
        </div>
    </div>
    </>
  )
}

export default LayoutForm