const ContactMe = () => {
  return (
    <div id="contactus-component">
      <form id="contact-form">
        <div>
          <section>
            <label id="mail-id">Mail Id: </label>
            <input
              type="text"
              id="mail-id-input"
              placeholder="example@gmail.com"
            />
          </section>
        </div>
        <div id="details-section">
          <section>
            <label id="mail-purpuse">Subject : </label>
            <textarea
              type="text"
              id="mail-purpuse-input"
              placeholder="  Write something ..."
            ></textarea>
          </section>
        </div>
        <input type="Submit" value="submit" id="submit-form" />
      </form>
    </div>
  );
};

export default ContactMe;
