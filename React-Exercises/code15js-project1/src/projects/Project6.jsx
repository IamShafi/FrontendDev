import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your styles

const Navbar = () => {
  const [linksHeight, setLinksHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLinksHeight(linksRef.current.getBoundingClientRect().height);
      setContainerHeight(linksContainerRef.current.getBoundingClientRect().height);
    };
    const handleScroll = () => {
      setScrollHeight(window.pageYOffset);

      if (scrollHeight > navbarRef.current.getBoundingClientRect().height) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight]);

  const linksRef = React.createRef();
  const linksContainerRef = React.createRef();
  // const navbarRef = React.createRef();

  const navToggleHandler = () => {
    if (containerHeight === 0) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0';
    }
  };

  const scrollHandler = () => {
    if (scrollHeight > 500) {
      topLinkRef.current.classList.add('show-link');
    } else {
      topLinkRef.current.classList.remove('show-link');
    }
  };

  const scrollLinkHandler = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    const navHeight = navbarRef.current.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });

    linksContainerRef.current.style.height = '0';
  };

  const topLinkRef = React.createRef();

  return (
    <>
      <nav id="nav" ref={navbarRef} className={fixedNav ? 'fixed-nav' : ''}>
        <div className="nav-center">
          <div className="nav-header">
            <img src="./logo.svg" className="logo" alt="logo" />
            <button className="nav-toggle" onClick={navToggleHandler}>
              <i className="fas fa-bars"></i>
            </button>
          </div>


          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li>
                <a href="#home" className="scroll-link" onClick={(e) => scrollLinkHandler(e, 'home')}>
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="scroll-link" onClick={(e) => scrollLinkHandler(e, 'about')}>
                  about
                </a>
              </li>
              <li>
                <a href="#services" className="scroll-link" onClick={(e) => scrollLinkHandler(e, 'services')}>
                  services
                </a>
              </li>
              <li>
                <a href="#tours" className="scroll-link" onClick={(e) => scrollLinkHandler(e, 'tours')}>
                  tours
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ... rest of your components */}
    </>
  );
};

export default Navbar;

//
