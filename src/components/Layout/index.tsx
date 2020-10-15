import React, {useState, createContext, RefObject, createRef} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import ReadingProgressBar from '../ReadingProgressBar'
type SidebarContext = {
    isSidebarOpen: boolean
    toggleSidebar: Function
}
const blankCtxObj: SidebarContext = {
    isSidebarOpen: false,
    toggleSidebar: () => {},
}

export const sidebarContext = createContext(blankCtxObj)

const Layout: React.FC<IProps> = (props: IProps) => {
    const {className, children} = props
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const target: RefObject<HTMLElement> = createRef()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const contextValue: SidebarContext = {
        isSidebarOpen,
        toggleSidebar,
    }

    return (
        <>
            <ReadingProgressBar target={target} />
            <sidebarContext.Provider value={contextValue}>
                <Navbar />
                <Sidebar />
            </sidebarContext.Provider>
            <main
                className={`main${className ? ' ' + className : ''}`}
                ref={target}
            >
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
