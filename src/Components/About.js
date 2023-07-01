import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1569878766010-17bff0a1987d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    We are thrilled to present our newly designed website, created with the aim of enhancing your academic journey and enriching your learning experience. As the heart of knowledge and exploration on campus, our library is dedicated to providing a nurturing environment where students, faculty, and staff can connect with information, ideas, and each other.<br/>
                        <br/>
                        Here, you will discover a vast array of resources meticulously curated to support your studies across a multitude of disciplines. Whether you're seeking textbooks, research papers, e-books, or multimedia materials, our extensive collection has been thoughtfully assembled to cater to diverse interests and academic pursuits.<br/>
                        <br/>
                        Our dedicated team of librarians is committed to assisting you on your quest for knowledge. They possess a wealth of expertise in research methodologies, citation styles, and information literacy, and they are eager to collaborate with you to ensure your success. Don't hesitate to reach out to them for guidance, as they are here to empower you in your educational journey.<br/>
                        <br/>
                        Beyond our physical collection, our website offers a range of digital resources that can be accessed from anywhere, at any time. Explore our online databases, e-journals, and e-books, which provide a wealth of scholarly information at your fingertips. Additionally, we provide access to various learning platforms, enabling you to sharpen your skills through interactive tutorials and online courses. <br/>
                        <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
