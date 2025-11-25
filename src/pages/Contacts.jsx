import call from "../assets/icons/call.svg";
import message from "../assets/icons/message.svg";

export default function Contacts() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <div className="contact__left-top">
              <h2 className="contact__title">Contact us</h2>
              <p className="contact__text">
                Send for us your request and we will get in touch with you as
                soon as possible
              </p>
            </div>
            <div className="contact__left-bottom">
              <div className="contact__left-bottom-div">
                <div className="contact__img-div">
                  <img src={call} alt="" className="contact__img" />
                </div>
                <span className="contact__left-span">+380 98 782 82 23</span>
              </div>
              <div className="contact__left-bottom-div">
                <div className="contact__img-div">
                  <img src={message} alt="" className="contact__img" />
                </div>
                <span className="contact__left-span">mailmail@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="contact__right">
            <form className="contact__form">
              <label className="contact__label">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="contact__input"
                />
              </label>
              <label className="contact__label">
                E-mail
                <input
                  type="text"
                  placeholder="Your email"
                  className="contact__input"
                />
              </label>
              <label className="contact__label">
                Message
                <textarea
                  type="text"
                  placeholder="Your message"
                  className="contact__input"
                />
              </label>
              <div className="contact__form-bottom">
                <button className="contact__btn">Send request</button>
                <p className="contact__form-bottom-text">
                  By sending request you agree to out Pivacy&Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
