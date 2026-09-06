const DEFAULT_TAG = "laviorg-20";

export function amazonAssociateTag(): string {
  return import.meta.env.AMAZON_ASSOCIATE_TAG || DEFAULT_TAG;
}

/** Amazon Brasil search URL with the Lavi Associates tag. */
export function amazonSearch(query: string): string {
  const params = new URLSearchParams({
    k: query,
    tag: amazonAssociateTag(),
  });
  return `https://www.amazon.com.br/s?${params.toString()}`;
}
