import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [pathname, hash])

    return null;
}

export default ScrollToTop