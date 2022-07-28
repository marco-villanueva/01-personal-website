import { forwardRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "../Button"

export const GetInTouch = forwardRef(({}, ref) => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const [wasMessageSent, setWasMessageSent] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(true);
  const [finalMessage, setFinalMessage] = useState('')

  const onSubmit = (e) => {
    setIsSubmitEnabled(false);
    e.preventDefault();
    emailjs.send()
      .then((response) => {
        setWasMessageSent(true);
        setFinalMessage('Message was successfully sent!');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        setIsSubmitEnabled(true);
        setFinalMessage('Message could not be sent, try again later');
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='c-get-in-touch' ref={ref}>
      <div className="c-get-in-touch__title">Get in touch</div>
      {wasMessageSent ? <div className='c-get-in-touch__message-sent'>{finalMessage}</div> :
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
              disabled={!isSubmitEnabled}
            />
          </div>

        </form>}
    </div>
  );
});
