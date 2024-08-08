import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <section className="header">
                <div className="navDiv">
                    <nav>
                        <div className="logoDiv">
                            <a href="/"><img src="/portfolioLogo.png" alt="Logo" className="logo" /></a>
                        </div>
                        
                        <div>
                            <a href="#">1st</a>
                            <a href="#">2nd</a>
                            <a href="#">3rd</a>
                            <a href="#">4th</a>
                        </div>
                    </nav>
                </div>
                <main className="headerMain">
                    <img src="https://media.licdn.com/dms/image/D4E03AQGv8Y86StAR6g/profile-displayphoto-shrink_200_200/0/1714768421664?e=1728518400&v=beta&t=8yaa-8GMY7fYUq-nsUkuNMDMVk9YLOhaLL4ze0zC7iI" alt="Profile Picture" className="profilePicture"/>
                    <h1>Mubarak Odufade</h1>
                    <div className="linksDiv">
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                    </div>
                </main>
            </section>
            <Outlet/>
            <footer>
                This is the footer
            </footer>
        </>
    )
}