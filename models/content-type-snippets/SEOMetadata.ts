import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * SEO Metadata
 * Id: 22775c9b-d269-4b03-941f-8dc0ee6c00c0
 * Codename: seo_metadata
 */
export type SEOMetadata = IContentItem<{
  /**
   * Description (text)
   * Required: false
   * Id: 0848a00d-f935-4270-b9b5-ba0b22d7eaa2
   * Codename: seo_metadata__description
   */
  seoMetadataDescription: Elements.TextElement;

  /**
   * Keywords (text)
   * Required: false
   * Id: ee4b0220-7852-4738-84a4-825b0c8b4284
   * Codename: seo_metadata__keywords
   */
  seoMetadataKeywords: Elements.TextElement;

  /**
   * Title (text)
   * Required: false
   * Id: 661a085e-eb93-437d-9f97-b58a1ec256af
   * Codename: seo_metadata__title
   */
  seoMetadataTitle: Elements.TextElement;
}>;
