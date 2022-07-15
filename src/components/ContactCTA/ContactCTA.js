import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';

export const ContactCTA = () => {
  return (
    <div className='c-contact-cta'>
      <div className='c-contact-cta__item'>
        <button>
          <LocalPhoneIcon />
        </button>
      </div>
      <div className='c-contact-cta__item'>
        <button>
          <WhatsAppIcon />
        </button>
      </div>
      <div className='c-contact-cta__item'>
        <button>
          <ShareIcon />
        </button>
      </div>
    </div>
  )
}
