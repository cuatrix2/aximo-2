import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo/favicon.ico";

function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/">
				<Image
					src={Logo}
					alt="Logo"
					className="light-version-logo"
					width={40}    // Ajusta el ancho del icono
					height={40}   // Ajusta la altura del icono
					sizes="100vw"
				/>
			</Link>
		</div>
	);
}

export default HeaderLogo;