import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul className=" flex gap-4 bg-red-300">
<li> <Link href="/">Home</Link></li>
<li> <Link href="/about">About</Link></li>
<li> <Link href="/contect-us">Contect-us</Link></li>     
      </ul>
     
     <p className=" bold-20">  </p>
    
    
    
    </div>
  );
}
