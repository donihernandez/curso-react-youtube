import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from 'react-loader-spinner'

const Loading = () => {
    return (
        <Audio
            height="100"
            width="100"
            color='#52ffa8'
            ariaLabel='loading'
        />
    )
}

export { Loading }