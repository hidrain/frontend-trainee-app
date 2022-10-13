
import ContentLoader from "react-content-loader"

export const Skeleton = () => {

    return (
        <ContentLoader
            speed={2}
            width={343}
            height={84}
            viewBox="0 0 343 84"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="88" y="27" rx="10" ry="10" width="144" height="16" />
            <rect x="88" y="47" rx="6" ry="6" width="80" height="12" />
            <circle cx="36" cy="42" r="36" />
        </ContentLoader>
    )
}