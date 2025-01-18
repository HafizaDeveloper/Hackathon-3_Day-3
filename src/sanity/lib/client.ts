import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
export default client;
