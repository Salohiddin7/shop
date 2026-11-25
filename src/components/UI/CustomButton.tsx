import  { type FC } from 'react'


interface ICustomButtonProps {
    width: number;
    height:number;
    text: string
    center?: boolean
    icon?: string
    gap?: number
    click?: () => void
}

const CustomButton:FC<ICustomButtonProps> = ({ width, height, text, center,icon,gap, click }) => {
  return (
    <button 
        onClick={click}
        className="button" 
        style={{
            maxWidth: width,
            height: height,
            marginLeft: center ? 'auto' : '',
            marginRight: center ? 'auto' : '',
            gap: gap
        }}
    >
        {icon && <img src={icon} alt="" /> }
        {text}
    </button>
  )
}

export default CustomButton