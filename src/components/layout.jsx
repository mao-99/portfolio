import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function Layout() {
    const location = useLocation();


    return (
        <>
            <section className="header">
                <div className="navDiv">
                    <nav>
                        <div className="logoDiv">
                            <a href="/">M.A.O</a>
                        </div>
                        
                        <div className="socialsDiv">
                            <a href='https://www.github.com/mao-99' target="_blank"><img alt='GitHub' className="navIcon" src='https://img.shields.io/badge/Github-100000?style=for-the-badge&logo=GitHub&logoColor=1E293B&labelColor=AEBDD5&color=AEBDD5'/></a>
                            <a href='https://discordapp.com/users/mao.nda' target="_blank"><img alt='discord' className="navIcon" src='https://img.shields.io/badge/Discord-100000?style=for-the-badge&logo=discord&logoColor=1E293B&labelColor=28534e&color=28534e'/></a>
                            <a href='https://www.linkedin.com/in/modufade' target="_blank"><img alt='linkedin' className="navIcon" src='https://img.shields.io/badge/LinkedIn-100000?style=for-the-badge&logo=linkedin&logoColor=1E293B&labelColor=AEBDD5&color=AEBDD5'/></a>
                        </div>
                    </nav>
                </div>
                <main className="headerMain">
                    <img src="/mao.png" alt="Profile Picture" className="profilePicture"/>
                    <h1>Mubarak Odufade</h1>
                    <div className="linksDiv">
                        <Link to="/">
                            <div className={location.pathname === "/" ? 'active': ""}>
                                Home
                            </div>
                        </Link>
                        <Link to="/blog">
                            <div className={location.pathname === "/blog" ? 'active': ""}>
                                Blog
                            </div>
                        </Link>
                        <Link to="/projects">
                            <div className={location.pathname === "/projects" ? 'active': ""}>
                                Projects
                            </div>
                        </Link>
                        <Link to="/resume">
                            <div className={location.pathname === "/resume" ? 'active': ""}>
                                Resumé
                            </div>
                        </Link>
                    </div>
                </main>
            </section>
            <Outlet/>
            <footer>
                <div className="legal">
                    <p>© 2024 Mubarak Odufade. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}