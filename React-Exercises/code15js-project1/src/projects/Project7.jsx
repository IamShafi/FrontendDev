import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('history');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Define your tab buttons and articles here
  const btns = [
    { id: 'history', label: 'History' },
    { id: 'vision', label: 'Vision' },
    { id: 'goals', label: 'Goals' },
  ];

  const articles = [
    {
      id: 'history',
      title: 'History',
      content:
        "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up...",
    },
    {
      id: 'vision',
      title: 'Vision',
      content:
        'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v...',
      list: ['list item', 'list item', 'list item'],
    },
    {
      id: 'goals',
      title: 'Goals',
      content:
        'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast...',
    },
  ];

  return (
    <section className="section">
      <div className="title">
        <h2>about</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!</p>
      </div>

      <div className="about-center section-center">
        <article className="about-img">
          <img src="./hero-bcg.jpeg" alt="" />
        </article>
        <article className="about">
          <div className="btn-container">
            {btns.map((btn) => (
              <button
                key={btn.id}
                className={`tab-btn ${activeTab === btn.id ? 'active' : ''}`}
                onClick={() => handleTabClick(btn.id)}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="about-content">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`content ${activeTab === article.id ? 'active' : ''}`}
              >
                <h4>{article.title}</h4>
                <p>{article.content}</p>
                {article.list && (
                  <ul>
                    {article.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tabs;
