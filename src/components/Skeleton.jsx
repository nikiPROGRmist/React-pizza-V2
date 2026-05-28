import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={480}
        viewBox="0 0 300 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="94" cy="241" r="2" />
        <circle cx="154" cy="120" r="122" />
        <rect x="26" y="261" rx="5" ry="5" width="255" height="26" />
        <rect x="26" y="300" rx="5" ry="5" width="253" height="65" />
        <rect x="27" y="389" rx="5" ry="5" width="86" height="35" />
        <rect x="126" y="385" rx="19" ry="19" width="154" height="43" />
        <rect x="139" y="355" rx="0" ry="0" width="1" height="6" />
    </ContentLoader>
)

export default Skeleton