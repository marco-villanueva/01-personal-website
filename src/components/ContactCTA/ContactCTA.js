import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ContactCTA = () => {
  return (
    <div className='c-contact-cta'>
      <a href="tel:7771903773" target="_blank" rel="noreferrer" className='c-contact-cta__item'>
        <button>
          <LocalPhoneIcon />
        </button>
      </a>
      <a href="https://wa.me/527771903773" target="_blank" rel="noreferrer" className='c-contact-cta__item'>
        <button>
          <WhatsAppIcon />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/marcovillanuevamx/" target="_blank" rel="noreferrer" className='c-contact-cta__item'>
        <button>
          <LinkedInIcon />
        </button>
      </a>
      <a href="mailto:marcovillanueva.m@gmail.com" target="_blank" rel="noreferrer" className='c-contact-cta__item'>
        <button>
          <EmailIcon />
        </button>
      </a>
      <a href="https://github.com/marco-villanueva" target="_blank" rel="noreferrer" className='c-contact-cta__item'>
        <button>
          <GitHubIcon />
        </button>
      </a>
    </div>
  )
}
