const Formulario = () => {
    return (
      <form class="contact-form">
        <label for="name">Your Name:</label>
        <input type="text" id="name" placeholder="enter your name" />
        <label for="email">Your Email:</label>
        <input type="text" id="email" placeholder="enter your name" />
        <label for="message">Your Message:</label>
        <textarea id="message" placeholder="enter your message"></textarea>
        <input type="button" value="Send" />
      </form>
    );
  };