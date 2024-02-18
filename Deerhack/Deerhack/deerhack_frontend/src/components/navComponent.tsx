"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<li
			className={
				"inline-block px-4 hover:text-blue-700" +
				(pathname === href ? " font-bold" : "")
			}
		>
			<Link href={href}>{children}</Link>
		</li>
	);
}

function Navbar(props: React.PropsWithChildren<{}>) {
	return (
		<nav className='flex flex-column p-4 ml-24'>
			
				<img src="/logo.png" className="w-52"/>
			
			<div className='flex-1'></div>
			<div>
				<ul>{props.children}</ul>
			</div>
		</nav>
	);
}

export default function NavComponent() {
	return (
		<Navbar>
			<NavLink href='/'>Home</NavLink>
			<NavLink href='/about'>About</NavLink>
			<NavLink href='/tool'>Tool</NavLink>
			<NavLink href='/donate'>Donate</NavLink>
			<NavLink href='/login'>Login</NavLink>
		</Navbar>
	);
}
