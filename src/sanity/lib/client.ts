import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

import imageUrlBuilder from '@sanity/image-url';

// Type for the image object passed to urlFor
interface ImageSource {
  asset: {
    _ref: string;
  };
}

const builder = imageUrlBuilder(client);

// Update the type of `source` from `any` to `ImageSource`
export const urlFor = (source: ImageSource) => builder.image(source);

export default client;
