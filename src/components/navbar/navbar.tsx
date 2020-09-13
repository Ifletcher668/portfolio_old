import React, {useContext} from 'react'
import logo from '../assets/logo.svg'
import {Link, graphql, useStaticQuery} from 'gatsby'
import {FaAlignJustify} from 'react-icons/fa'
import {sidebarContext} from '../layout/layout'
import {Title} from '../titles/titles'
import Links from '../links/siteLinks'

// TODO: Find a better placement for submenus. They're getting in the way

// const query = graphql`
//     {
//         file(relativePath: { eq: "logo.svg" }) {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//             extension
//             publicURL
//         }
//     }
// `;

const Navbar: React.FC<IProps> = (props: IProps) => {
    const {toggleSidebar} = useContext(sidebarContext)

    // const {
    // file: {
    // childImageSharp: { fluid },
    // },
    // } = useStaticQuery(query);

    return (
        <>
            <nav className={`navbar`}>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            {/* <img src={logo} alt='logo' /> */}
                            <Title title="Isiah Fletcher" />
                        </Link>

                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => toggleSidebar()}
                        >
                            <FaAlignJustify />
                        </button>
                    </div>
                    <Links className="nav-links" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
