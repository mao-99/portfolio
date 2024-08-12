import React, { useEffect } from 'react';

export default function Blog() {
    useEffect(()=>{
        document.title = "Blog | Mubarak"
    }, [])
    // Sample blog posts data
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding React Hooks',
            excerpt: 'React Hooks have revolutionized the way we write React components. In this post, we will explore the basics of hooks and how to use them in your projects...',
            content: 'React Hooks were introduced in version 16.8. They allow you to use state and other React features without writing a class. The most commonly used hooks are useState and useEffect...'
        },
        {
            id: 2,
            title: 'JavaScript ES6 Features',
            excerpt: 'ES6, also known as ECMAScript 2015, introduced several new features to JavaScript. Let\'s dive into some of the most important features like arrow functions, classes, and template literals...',
            content: 'ES6 brought many new features to JavaScript, making it more powerful and easier to use. Arrow functions, for instance, provide a more concise syntax for writing functions...'
        },
        {
            id: 3,
            title: 'CSS Grid vs. Flexbox',
            excerpt: 'CSS Grid and Flexbox are two powerful layout systems in CSS. In this post, we will compare them and discuss when to use each one in your web designs...',
            content: 'CSS Grid and Flexbox are both used to create layouts, but they serve different purposes. Flexbox is best for one-dimensional layouts, while Grid is perfect for two-dimensional layouts...'
        },
    ];

    return (
        <>
            <div className="blog-posts">
                {blogPosts.map((post, index) => (
                    <div key={index} className="carouselCard card">
                    <h1 className="cardText">{post.title}</h1>
                    <div id={`carouselExampleControls${index}`} className="carousel slide" data-bs-ride="carousel">
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
                        <p className="cardText">{post.content}</p>
                    </div>
            </div>
                ))}
            </div>
        </>
    )
}
