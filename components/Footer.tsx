import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <ul className="flex gap-4 bg-red-300 items-center justify-center">
<li> <Link href="/">Home</Link></li>
<li> <Link href="/about">About</Link></li>
<li> <Link href="/contect-us">Contect-us</Link></li>     
      </ul>
     
     <p className="flex gap-4 bg-red-300 items-center justify-centerscroll-margin-left: 1px;
scroll-margin-right: 100px;croll-margin-top: 1px;
scroll-margin-bottom: 1px;">  GOD Blass </p>
    
    
    
    </div>
  );
}
