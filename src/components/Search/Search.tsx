import { useState, type FC } from 'react'
import './Search.scss'
import { closeIcon, searchIcon } from "../../utils/img"
import { useProduct } from "../../store/useProduct"

const Search:FC = () => {
  
  const { setSearchValue } = useProduct()
  const [value, setValue] = useState('')
  
  
  const submit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchValue(value)
  }
  
  const reset = () => {
    setValue('')
    setSearchValue('')
  }
  
  return (
    <>
        <form className="form" onSubmit={(event) => submit(event)}>
            <div className="form__box">
              <input 
                type="text" 
                className="form__box-input"
                placeholder="Введите ..." 
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <img onClick={() => reset()} src={closeIcon} alt="" className="form__box-icon" />
            </div>
            <button className="form__box-btn">
              <img src={searchIcon} alt="" />
            </button>
        </form>
    </>
  )
}

export default Search