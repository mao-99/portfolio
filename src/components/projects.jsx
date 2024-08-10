import { useEffect, useState } from "react"

export default function Projects() {
    useEffect(()=>{
        document.title = "Projects | Mubarak"
    }, [])
    const [projects, setProjects] = [{},{},{},{}]

    return (
        <>
            <div className="carouselCard card">
                <h1 className="cardText">
                    Judd
                </h1>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/simpleForm.png" className="carouselCardImage" alt="Project Demo Image"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/averageForm.png" className="carouselCardImage" alt="Project Demo Image"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/averagePlot.png" className="carouselCardImage" alt="Project Demo Image"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/comparisonPlot.png" className="carouselCardImage" alt="Project Demo Image"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev carouselControlButton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next carouselControlButton" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="card-body">
                        <p className="cardText">
                            Judd is an application that provides easy access to real local conviction and sentencing data in the New York State criminal justice system, promoting transparency and accountability.
                        </p>
                        <p>
                            github: <a href="https://github.com/mao-99/judd.world">judd repo</a>
                        </p>
                    </div>
            </div>
        </>
    );
}

// Four Projects: 1. Judd, 2. Creatorverese, 3. 5S Cleaners, 4. ExchangeRate, 5. Data Scraper