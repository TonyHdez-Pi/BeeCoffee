import React from "react";
import MenuItem from "./MenuItem";

export default function Header() {
	return (
		<header className="border-2 w-full flex flex-row justify-between p-1 bg">
			<div className="logo w-1/3">Logo</div>
			<section className="menu p-1 w-1/3">
				<div className="flex flex-row justify-evenly">
					<MenuItem label="Productos" />
					<MenuItem label="Haz tu mezcla" />
					<MenuItem label="Contacto" />
					<MenuItem label="Acerca de" />
				</div>
			</section>
			<div className="search_cart_container w-1/3 text-right">
				search cart container
			</div>
		</header>
	);
}
