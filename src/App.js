import React, { useState, useEffect } from "react";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [cursorStyle, setCursorStyle] = useState({ left: "0px", top: "0px" });
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false); // Состояние для модального окна портфолио
  const [isContactOpen, setIsContactOpen] = useState(false); // Состояние для модального окна "Свяжитесь со мной"

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorStyle({
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.querySelector(".about-me-section");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="custom-cursor" style={cursorStyle}></div>
      <div className="container">
        {/* Левая часть */}
        <div className="text-section">
          <h1>Монолов Улукбек 🐼 </h1>
          <p>Разработчик, который любит учиться и создавать новые вещи.</p>
          <button onClick={togglePortfolio}>Мое Портфолио</button>
          <button onClick={scrollToAboutMe}>Обо Мне</button>
          <button onClick={toggleContact}>Свяжитесь со мной</button>
        </div>

        {/* Правая часть (Фото) */}
        <div className="photo-section">
          <img src="/my-photo.jpg" alt="Мое Фото" />
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-me-section">
        <h2>Обо Мне</h2>
        <p>
          Я увлеченный веб-разработчик с опытом работы в создании адаптивных и динамичных веб-сайтов с использованием React и других современных технологий. 
          Люблю изучать новое и всегда готов к новым вызовам!
        </p>
      </div>

{/* Модальное окно для портфолио */}
{isPortfolioOpen && (
  <div className="portfolio-modal">
    <div className="portfolio-content">
      <h2>Мое Портфолио</h2>
      <div className="projects">
        <div className="project-card">
          <a
            href="https://github.com/yourusername/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="card-image">
              <img src="/vegas.png" alt="Проект 1" />
              <div className="card-overlay">
                <p className="quote">"Этот проект помог мне лучше понять React!"</p>
              </div>
            </div>
            <h3>Проект 1</h3>
            <p>Описание проекта</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/yourusername/project2"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="card-image">
              <img src="/autupr.jpg" alt="Проект 2" />
              <div className="card-overlay">
                <p className="quote">"Интересный проект, который развил мои навыки CSS!"</p>
              </div>
            </div>
            <h3>Проект 2</h3>
            <p>Описание другого проекта</p>
          </a>
        </div>
      </div>
      <button onClick={togglePortfolio}>Закрыть</button>
    </div>
  </div>
)}

    {/* Модальное окно для контактов */}
{isContactOpen && (
  <div className="contact-modal">
    <div className="contact-content">
      <h2>Свяжитесь со мной</h2>
      <p>Вы можете найти меня в следующих сетях:</p>
      <ul>
        <li>
          <a href="https://wa.me/990909109" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </li>
        <li>
          <a href="https://https://github.com/bekbollssun/VegasBeauty" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/2702ooll" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
      <button onClick={toggleContact}>Закрыть</button>
    </div>
  </div>
)}

    </div>
  );
}

export default App;
