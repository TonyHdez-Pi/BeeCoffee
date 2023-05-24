import React from "react";
import { MenuItemProps } from "../interfaces/globalInterfaces";

export default function MenuItem({ label }: MenuItemProps) {
	return (
		<button className="text-secondaryTextColor hover:text-mainButtonColor hover:cursor-pointer">
			{label}
		</button>
	);
}
