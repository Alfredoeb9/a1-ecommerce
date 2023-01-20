import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

// connect to sanity
export const client = sanityClient({
  projectId: "te8f3zij",
  dataset: "production",
  apiVersion: "2023-01-20",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// build image url based of sanity connectoin
const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
