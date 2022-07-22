import { forwardRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "../Button"

export const GetInTouch = forwardRef(({}, ref) => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send()
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='c-get-in-touch' ref={ref}>
      <div className="c-get-in-touch__title">Get in touch</div>

      <form className="c-get-in-touch__form">
        <input
          type='text'
          name='from_name'
          placeholder='Your name'
          value={toSend.from_name}
          onChange={handleChange}
        />

        <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder='Your message'
          value={toSend.message}
          onChange={handleChange}
          rows="6" cols="50"
        />
        <div className='c-get-in-touch__button-container'>
          <Button
            description="Send my message"
            theme="primary"
            action="contact"
            onClick={onSubmit}
          />
        </div>

      </form>
    </div>
  );
});
