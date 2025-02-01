export default function Contact() {
  return (
    <div>
      <article className="contact-card">
        <img
          src="../src/assets/whiskerson image.png"
          alt=""
          className="cat"
          width="280"
        />
        <h3>Mr Whiskerson</h3>
        <div className="info-group">
          <img
            src="../src/assets/phone-icon.png"
            alt=""
            width="10"
            className="phone"
          />
          <span>(212) 555-1234</span>
        </div>
        <div className="info-group">
          <img
            src="../src/assets/mail-icon.png"
            alt=""
            width="40"
            className="mail"
          />
          <span>mr.whiskhaz@catnap.meow</span>
        </div>
      </article>
    </div>
  );
}
