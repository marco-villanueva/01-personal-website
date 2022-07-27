import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import DownloadIcon from '@mui/icons-material/Download';


export const Button = ({description, theme='primary', action, onClick}) => {

  const isIconValid = ['contact','download'].includes(action);
  const isThemeValid = ['primary','dark', 'light'].includes(theme);

  const iconList = {
    contact: <MarkChatReadOutlinedIcon/>,
    download: <DownloadIcon/>,
  }

  const icon = isIconValid ? iconList[action] : ''
  const buttonTheme = isThemeValid ? `c-button--${theme}`: 'c-button--primary';

  return (
    <button className={buttonTheme} onClick={onClick}>
      {description}
      {icon}
    </button>
  )
}
