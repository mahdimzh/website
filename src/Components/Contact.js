import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    //const name = this.props.data.name;
    const country = this.props.data.address.country;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const mailTo = "mailto:" + this.props.data.email;
    const phoneTo = "tel:" + this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <div className="row section-head" style={{display: 'none'}}>
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
        <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Email: <a href={mailTo}>{email}</a>
                <br />
                Phone: <a href={phoneTo}>{phone}</a>
                <br />
                {street} <br />
                {country}, {city} 
                <br /> {state} {zip}
              </p>
            </div>

            <div className="widget widget_tweets" style={{display: 'none'}}>
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm" style={{display: 'none'}}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
            <iframe style={{border:0, width: '100%', height: 270}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1713.4521408143469!2d51.37274132243104!3d35.69727572910265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00e957ed469b%3A0xb7a26ffaf9a11c2e!2sTehran%20Province%2C%20Tehran%2C%20Oroumiyeh%20St%2C%20Iran!5e0!3m2!1sen!2sus!4v1604680446440!5m2!1sen!2sus" frameborder="0" allowfullscreen></iframe>

          </div>

          
        </div>
      </section>
    );
  }
}

export default Contact;
