import { useRef, useState } from 'react';
import meestLogo from '../../assets/img/meest-logo.svg';
import polonezLogo from '../../assets/img/polonez-logo.svg';
import { FlexContainer, HeaderEmail, LanguageSwitcher, LanguageEmoji, Dropdown } from '../../styles/global-styles';

const Header = ({ user }) => {
  const logo = user === 'polonez' ? polonezLogo : meestLogo;
  const textRef = useRef();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    name: 'Українська',
    label: 'UK',
    flag: '🇺🇦'
  });

   const languages = [
    { name: 'Українська', label: 'UK', flag: '🇺🇦' },
    { name: 'Polski', label: 'PL', flag: '🇵🇱' },
  ];

   const handleSelect = (lang) => {
    setSelectedLang(lang);
    setShowLangDropdown(false);
  };

  const HeaderEmailClick = (e) => {
    e.preventDefault();
    const text = textRef.current.innerText;
    navigator.clipboard.writeText(text).catch(err => {
      console.error("Failed to copy: ", err);
    });
  }

  return (
    <header>
      <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 offset-lg-6 d-flex justify-content-between">
                <img src={logo} alt={`${user} logo`} className='contain-image header-logo' />

                <FlexContainer justifycontent='space-between' alignitems='center' gap='16px'>
                  <HeaderEmail ref={textRef} onClick={HeaderEmailClick}>
                    <i className="fa-solid fa-envelope"></i>
                    info.usa@meest.com
                  </HeaderEmail>
                   <LanguageSwitcher onClick={(show) => setShowLangDropdown(show => !show)}>
                    <FlexContainer alignitems='center' gap='6px'>
                      <LanguageEmoji title={selectedLang.label}>{selectedLang.flag}</LanguageEmoji>
                      <p>{selectedLang.label}</p>
                    </FlexContainer>

                    {showLangDropdown && (
                      <Dropdown>
                        {languages.map(lang => (
                          <p
                            key={lang.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelect(lang);
                            }}
                          >
                            {lang.label} - {lang.name}
                          </p>
                        ))}
                      </Dropdown>
                    )}
                  </LanguageSwitcher>
                </FlexContainer>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;