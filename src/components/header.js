import * as React from "react"
import { Link } from "gatsby"

const Header = ({isRootPath, title}) => {
	let logo;

	if(isRootPath){
		logo = "Inicio";
	}else{
		logo = title;
	}

	return (
		<header>
		<div className="container">
			<div className="inner-header">
				<div className="logo">
					 <Link to="/">{logo}</Link>
				</div>
				<div className="navigation">
					<nav>
						<Link to="/acerca">Acerca de mi</Link>
						<Link to="/trabajos">Trabajos</Link>
						<Link to="/contacto">Contacto</Link>
					</nav>
				</div>
			</div>
		</div>
		</header>
	)
}

export default Header