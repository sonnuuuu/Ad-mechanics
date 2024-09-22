import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/Panchayat.jpg",
    title: "Panchayaat",
    link: "https://tenor.com/en-GB/view/dekh-raha-hai-vinod-panchayat2-binod-vinod-gif-26220517",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/mirzapur.jpeg",
    title: "Mirzapur",
    link: "https://tenor.com/en-GB/view/tum-iske-liye-hmare-darwaze-pe-chale-aaye-mirzapur-pankaj-tripathi-mirzapur-bsdk-mirzapur-memes-gif-23739004",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/scam1992.jpg",
    title: "Scam 1992",
    link: "https://tenor.com/en-GB/view/harshad-mehta-scam1992-harshad-meheta-gif-18967716",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Stree2.webp",
    title: "Stree2",
    link: "https://tenor.com/en-GB/view/shraddha-kapoor-stree-2-stree-shraddha-kapoor-stree-2-gif-12228039952467704496",
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