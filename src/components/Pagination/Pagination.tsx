import { type FC } from 'react'
import './Pagination.scss'
import * as ReactPaginateImport from 'react-paginate'
const ReactPaginate = ReactPaginateImport.default?.default 

interface IPaginationProps {
    count: number;
    limit: number;
    onPageChange: (page: number) => void 
    currentPage: number;
}

const Pagination: FC<IPaginationProps> = ({ count,limit, onPageChange, currentPage }) => {
    
    const pageCount = Math.ceil(count / limit)
    
    return (
        <>
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onPageChange(event.selected + 1)}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}
            />
        </>
    )
}

export default Pagination