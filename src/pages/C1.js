import React, { useEffect, useState } from "react";
import './c1.css';
import AOS from "aos";
import "aos/dist/aos.css";
import {BsCheckAll} from 'react-icons/bs';
const C1 = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <div>
            <div className="intro-parent">
                <div className="introduction">
                    <section className="opening">
                        <div className="left">
                            <h1 className="intro-head" data-aos="fade-right" data-aos-delay='200'>
                                Introduction
                            </h1>
                            <p className="intro-content" data-aos="fade-right" data-aos-delay='400'>
                                In today's fiercely competitive e-commerce landscape, DIwise UK, a renowned provider of high-end fashion and lifestyle products, recognized the critical importance of customer engagement in sustaining market leadership and customer satisfaction. To address this challenge, they embarked on an innovative journey, implementing a customized AI chatbot designed to enhance customer interactions and bolster overall satisfaction.
                            </p>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-delay='200'></div>
                    </section>
                </div>
            </div>
            {/* background Section */}

            <div className="background-parent">
                <div className="background">
                    <h1>Background</h1>
                    <p data-aos="fade-down" data-aos-delay='200'>DIwise UK, a prominent e-commerce player, caters to a diverse customer base with an extensive array of products. To be the first one in the competitive market, they harnessed cutting-edge technology by deploying a personalized AI chatbot to amplify customer support and engagement.</p>
                </div>
            </div>
            {/* End Background Section */}
            {/* objective section */}
            <div className="objective-parent">
                <div className="objective">
                    <h3>Objective</h3>
                    <p>DIwise UK established clear objectives for their AI chatbot implementation:</p>
                    <div className="card-container">
                        <div className="card">
                            <div className="card-content">
                                <h2>Enhanced Customer Engagement</h2>
                                <p>The primary aim was to cultivate more meaningful and interactive customer interactions, ensuring that each customer felt truly valued.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <h2>Streamlined Customer Support</h2>
                                <p>The chatbot was designed to streamline customer support, providing swift responses to inquiries and elevating the quality of support.</p>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <h2>Boosted Sales and Conversion</h2>
                                <p>By harnessing the chatbot's capabilities, DIwise UK sought to enhance sales and conversion rates by assisting customers with personalized product recommendations and purchasing decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End objective Section */}

            
            {/* start solution Section  */}
            <div className="solution-container">
                <div className="solution">
                    <h3>Solution</h3>
                    <p>To meet these objectives, DIwise UK adopted a cutting-edge personalized AI chatbot with multi-platform integration. Key features included:</p>
                    <div className="card-container">
        <div className="card">
            <div className="card-icon">
            <div className="icon"><BsCheckAll/></div>
            </div>
            <div className="card-content">
                <h2>Personalized Recommendations</h2>
                <p>The chatbot harnessed advanced machine learning algorithms, leveraging customer data, including purchase history and browsing behaviour, to offer tailored product suggestions.</p>
            </div>
        </div>
        <div className="card">
            <div className="card-icon">
            <div className="icon"><BsCheckAll/></div>
            </div>
            <div className="card-content">
                <h2>Real-time Support</h2>
                <p>Customers could access instant answers to frequently asked questions, check order status, and obtain assistance with product-related queries.</p>
            </div>
        </div>
        <div className="card">
            <div className="card-icon">
            <div className="icon"><BsCheckAll/></div>
            </div>
            <div className="card-content">
                <h2>Multi-Platform Integration</h2>
                <p>The chatbot seamlessly operated across DIwise UK's website, Facebook page, and WhatsApp, providing customers with the flexibility to engage through their preferred channels.</p>
            </div>
        </div>
        <div className="card">
            <div className="card-icon">
            <div className="icon"><BsCheckAll/></div>
            </div>
            <div className="card-content">
                <h2>Continuous Learning</h2>
                <p> The chatbot was meticulously designed to evolve and improve its responses through constant customer interactions continuously.</p>
            </div>
        </div>
    </div>
    {/* End solution Section */}
                </div>
            </div>
        </div>

    )
}

export default C1

