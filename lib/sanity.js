import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-02-01',
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  //   ignoreBrowserTokenWarning: true,
  //   token: 'api-token', // or leave blank to be anonymous user
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
