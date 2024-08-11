import { useEffect, useState } from "react";

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | Mubarak";
    }, []);

    const [projects, setProjects] = useState([
        { title: "Judd", pictures: ["/judd1.png", "/judd2.png", "/judd3.png", "/judd4.png"], description: "Judd is an application that provides easy access to real local conviction and sentencing data in the New York State criminal justice system, promoting transparency and accountability.", link: "https://github.com/mao-99/judd.world" },
        { title: "Creatorverse", pictures: ["/creatorverse1.png", "/creatorverse2.png", "/creatorverse3.png", "/creatorverse4.png"], description: "Creatorverse is a frontend app for managing your favorite content creators with CRUD operations. Add, view, update, and delete Twitch streamers, YouTube channels, Instagram personalities, TikTok accounts, and Mastodon microbloggers. Effortlessly organize your top content creators across multiple platforms.", link: "https://github.com/mao-99/creatorverse" },
        { title: "5S Cleaners", pictures: ["/5s1.png", "/5s2.png", "/5s3.png", "/5s4.png"], description: "This is a frontend website for a cleaning business featuring a built-in booking notification system. Users can effortlessly browse available services and book residential or commercial cleaning appointments. The app provides real-time alerts during the booking process, ensuring a smooth and responsive user experience.", link: "https://github.com/mao-99/5S-Cleaners" },
        { title: "ExQuote", pictures: ["/exchange1.png", "/exchange2.png", "/exchange3.png", "exchange4.png"], description: "This app allows users to easily look up exchange rates for the United States Dollar (USD) against approximately 150 currencies. It provides real-time rates and lets users access historical rates for 1, 2, 3, 5, or 7 days. The app offers detailed statistics, including maximum, minimum, and average rates, which adjust dynamically based on the selected time frame.", link: "https://github.com/mao-99/exquote" },
        { title: "NYS DOCCS Dynamic Web Scraper", pictures: ["/nysScraper1.png"], description: "This Python-based data scraper, built with Selenium and Pandas, was designed to extract sentencing data for over 350,000 convicts from the New York State Department of Corrections and Community Supervision's website. The dynamic scraper navigates the site by interacting with page elements, clicking on individual convict links, and retrieving detailed data such as names, dates of birth, crimes, and sentences.", link: "https://github.com/mao-99/NYS-DOCCS-Data-Scraper" }
    ]);

    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="carouselCard card">
                    <h1 className="cardText">{project.title}</h1>
                    <div id={`carouselExampleControls${index}`} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {project.pictures.map((picture, picIndex) => (
                                <div key={picIndex} className={`carousel-item ${picIndex === 0 ? "active" : ""}`}>
                                    <img src={picture} className="carouselCardImage" alt="Project Demo Image" />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev carouselControlButton" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carouselControlButton" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="cardText">{project.description}</p>
                        <p>
                            GitHub: <a href={project.link}>{project.title} repo</a>
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}
