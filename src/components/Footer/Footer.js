// Fn Comp with Anonymous Fn 
const Footer = function() {

  const copyrightYear = 2023;

  return (
    <footer className="text-center">
      <hr />
      <p>Copyright &copy; {copyrightYear} | Arun</p>
    </footer>
  );
}

export default Footer;