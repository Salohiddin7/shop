import  { type FC } from 'react'
import Select from 'react-select'
import './Sort.scss'
import { useProduct } from "../../store/useProduct"

const options = [
  { value: 'title', label: 'По названию' },
  { value: 'price', label: 'По цене' },
  { value: 'rating', label: 'По рейтингу' }
]

const Sort:FC = () => {
  
  const { setSortValue } = useProduct()
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '200px',
      height: '50px',
      border: '1px solid #efefef',
      borderRadius: '10px',
      background: 'rgb(252, 252, 253)',
      color: 'red',
      fontSize: '14px',
      fontWeight: '400',
      boxShadow: 'none',
      padding: '0px 12px'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontFamily: 'var(--font-family)',
      fontWeight: '400',
      fontSize: '14px',
      textAlign: 'justify',
      color: '#9aa0b4',
    }),
    indicatorsContainer: () => ({
      display: 'none' // ❌ скрывает стрелку вниз и разделительную палочку
    }),
  };
  
  const changeOption = (option:any) => {
    setSortValue(option.value)
  }
  
  
  return (
    <>
        <Select 
          onChange={changeOption}
          options={options}
          placeholder="Сортировать по:"
          styles={customStyles}
        />
    </>
  )
}

export default Sort