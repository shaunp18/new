import TypingAnimation from "@/components/TypingAnimation";
import Image from "next/image";
import Link from "next/link";
import Cardset from "@/components/cardset";

function LinkButton(props: React.PropsWithChildren<{ href: string }>) {
	return (
		<Link href={props.href}>
			<div className='rounded-lg bg-[#f3f4f6] py-2 px-4'>
				{props.children}
			</div>
		</Link>
	);
}

export default function Home() {
	
	return (
		<Cardset info={[{ front: "Hello", back: "Bye" }, { front: "Hello2", back: "Bye2" }]} />
	  );

}



