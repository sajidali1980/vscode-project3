import Link from "next/link";
export default function Header() {
  return (
    <div>
      <ul className="flex gap-4 bg-red-300 items-center justify-center">
<li> <Link href="/">Home</Link></li>
<li> <Link href="/about">About</Link></li>
<li> <Link href="/contect-us">Contect-us</Link></li>     
      </ul>
     
     <p className="flex gap-4 bg-red-300 items-center justify-center">  GOD Blass </p>
    
    
    
    </div>
  );
}
