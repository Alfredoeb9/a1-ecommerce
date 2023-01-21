/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "@/lib/client";

function HeroBanner({ heroBanner }) {
  const {
    buttonText,
    product,
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
    image,
    _id,
    slug,
  } = heroBanner;

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image)} alt="kicks" className="hero-banner-image" />

        <div>
          <Link href={`/product/${slug.current}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
