import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/Panchayat.jpg",
    title: "Panchayaat",
    link: "https://www.rubbishbrothers.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/mirzapur.jpeg",
    title: "Mirzapur",
    link: "https://www.atlasmassage.ca",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/scam1992.jpg",
    title: "Scam 1992",
    link: "https://www.canadiansecuritysolutions.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Stree2.webp",
    title: "Stree2",
    link: "https://www.flight9.art",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
               h-5/6 w-full object-cover rounded-lg
                  transform transition duration-300 hover:scale-105"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}