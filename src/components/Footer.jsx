import logo from "../assets/LOGO_FOOTER.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__credits">
        <img src={logo} alt="" className="footer_image" />
        <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
