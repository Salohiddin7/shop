import  { useEffect, type FC } from 'react'
import './Products.scss'
import Sort from "../Sort/Sort"
import Search from "../Search/Search"
import ProductsItem from "./ProductsItem"
import { getProducts } from "../../api/common"
import type { IProduct } from "../../types"
import ProductsSkeleton from "./ProductsSkeleton"
import { useProduct } from "../../store/useProduct"
import Pagination from "../Pagination/Pagination"
import { useLocation, useNavigate } from "react-router-dom"

const Products:FC = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  
  
  
  const { 
    searchValue, 
    sortValue,
    limit,
    currentPage,
    offset,
    setCurrentPage,
    setOffset,
    setSearchValue,
    setSortValue
   } = useProduct()
  const { data } = getProducts({ searchValue, sortValue, limit, offset })
  
  const skeletons = [...new Array(9)].map((_,i) => <ProductsSkeleton key={i}/>)
  
  
  const onPageChange = (page: number) => {
    setCurrentPage(page)
    setOffset(page * limit - limit)
  }
  
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSortValue(params.get('ordering')!)
    setSearchValue(params.get('search')!)
    
  }, [location.search])
  
  useEffect(() => {
    const params = new URLSearchParams()
    searchValue && params.set('search', searchValue)
    sortValue && params.set('ordering', sortValue)
    
    navigate(`?${decodeURIComponent(params.toString())}`)
    
  }, [sortValue,searchValue])
  
  
  
  return (
    <>
        <div className="products">
            <div className="products__filters">
                <Sort/>
                <Search/>
            </div>
            <div className="products__list">
              {data ? data.results.map((product: IProduct) => (
                <ProductsItem
                  key={product.id}
                  product={product}  
                />
              )) : skeletons }
            </div>
            {data && 
              <Pagination
                count={data.count}
                limit={limit}
                onPageChange={onPageChange}
                currentPage={currentPage}
              />
            }
        </div>
    </>
  )
}

export default Products