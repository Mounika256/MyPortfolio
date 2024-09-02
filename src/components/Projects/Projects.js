import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import FoodMunch from '../../assets/foodmunch-project.png';
import MindSet from '../../assets/mindset-project.png';
import TedX from '../../assets/ted-project.png';
import GameGuess from '../../assets/guessinggame-project.png';
import SpeedTyping from '../../assets/speedtyping-project.png';
import ChatBot from '../../assets/chatbot-project.png';

export default function Projects() {
    const projects = [
        {
          imgSrc: FoodMunch,
          altText: "FoodMunch",
          link: "https://mounifmwebsite.ccbp.tech"
        },
        {
          imgSrc: MindSet,
          altText: "MindSet",
          link: "https://mounimindset.ccbp.tech"
        },
        {
          imgSrc: TedX,
          altText: "TedX",
          link: "https://mounited.ccbp.tech"
        },
        {
          imgSrc: GameGuess,
          altText: "GameGuess",
          link: "https://mouniguessnum.ccbp.tech"
        },
        {
          imgSrc: SpeedTyping,
          altText: "SpeedTyping",
          link: "https://mounityping.ccbp.tech"
        },
        {
          imgSrc: ChatBot,
          altText: "ChatBot",
          link: "https://mounichatbotmkr.ccbp.tech"
        }
      ];
    

  return (
    <div id="projects" className="d-flex flex-column items-center min-h-screen bg-gray-900 px-10 py-10 scroll-mt-20 scroll-smooth">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-[#356c70]">Personal Projects</h1>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col md={4} lg={3} key={index} className="d-flex justify-content-center mb-4">
            <Card className="max-w-[300px] m-5 h-full">
              <Card.Img variant="top" src={project.imgSrc} alt={project.altText} className="h-[150px] object-cover" />
              <Card.Body>
                <Card.Title>
                  <a href={project.link} target="_blank" rel="noreferrer" className='text-[#356c70]'>View Project</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
