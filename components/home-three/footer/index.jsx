import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/images/logo/favicon.ico";

function Footer() {
  const footerNavs = [
    {
      label: "Colegio de Abogados",
      items: [
        { href: '../parnerts', name: 'Convenios' },
        { href: 'javascript:void()', name: 'Documentos' },
      ],
    },
    {
      label: "Recursos",
      items: [
        { href: '../contact', name: 'Contacto' },
      ],
    }
  ];

  return (
    <footer className="aximo-footer-section bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-col items-center">
 
        <Link href="/">
          <Image src={icon} alt="Logo" width={70} height={50} style={{ display: "block",   marginLeft: "auto",   marginRight: "auto", }}/>
        </Link>
        
   
        <div className="text-center mt-2">
          <p>Fonles Studios, Corp. All rights reserved.</p>
        </div>
        
     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-700">{footerNavs[0].label}</h4>
            <ul className="space-y-1">
              {footerNavs[0].items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-indigo-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-700">{footerNavs[1].label}</h4>
            <ul className="space-y-1">
              {footerNavs[1].items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-indigo-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <a href="https://www.facebook.com/catungurahua" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end space-x-2">
              <i className="icon-facebook text-blue-600"></i>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
