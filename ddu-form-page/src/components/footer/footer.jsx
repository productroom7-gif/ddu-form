const Footer = ({ language = 'en' }) => (
  <footer><div className="container"><div className="row"><div className="col-lg-10 offset-lg-1 col-md-12 d-flex justify-content-center footer-col"><div className="copyright">
    <p>{language === 'pl' ? '© 2025 - Meest Group - Usługi pocztowe i transportowe. Wszelkie prawa zastrzeżone' : '© 2025 - Meest Group - Postal & Transport Services. All rights reserved'}</p>
  </div></div></div></div></footer>
);
export default Footer;
