import { type FC } from 'react'
import ContentLoader from "react-content-loader"

const ProductsSkeleton: FC = () => {
    return (
        <>
            <ContentLoader
                speed={2}
                width={435}
                height={323}
                viewBox="0 0 435 323"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="20" ry="20" width="435" height="323" />
            </ContentLoader>
        </>
    )
}

export default ProductsSkeleton