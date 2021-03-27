import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    //const github = this.props.data.github;
    const name = this.props.data.name;
    const lastname = this.props.data.lastname;
    const description = this.props.data.description;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h2 className="responsive-headline" style={{color: 'white'}}>{lastname}</h2>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
              <a target="_blank" href={project} className="button btn project-btn" style={{width: 260, margin: 5}}>
                <i className="fa fa-book"></i>Open Source Projects
              </a>
              <a target="_blank" href={resumeDownload} className="button btn github-btn" style={{width: 260, margin: 5}}>
                <i className="fa fa-download"></i>Download Resume
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
