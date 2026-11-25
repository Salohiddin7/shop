import { type FC } from 'react'
import ContentLoader from "react-content-loader"

const Sidebarskeleton: FC = () => {
    return (
        <>
            <ContentLoader
                speed={2}
                width={320}
                height={360}
                viewBox="0 0 320 360"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="45" cy="45" r="45" />
                <rect x="0" y="120" rx="0" ry="0" width="160" height="22" />
                <rect x="0" y="150" rx="0" ry="0" width="160" height="22" />
                <rect x="0" y="215" rx="0" ry="0" width="130" height="22" />
                <rect x="0" y="275" rx="0" ry="0" width="130" height="22" />
                <rect x="0" y="335" rx="0" ry="0" width="130" height="22" />
            </ContentLoader>
        </>
    )
}

export default Sidebarskeleton