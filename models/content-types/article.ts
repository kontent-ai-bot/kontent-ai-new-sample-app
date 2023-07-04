import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type ArticleType } from '../taxonomies/articleType';
import { type Person } from './person';
import { type SEOMetadata } from '../content-type-snippets/SEOMetadata';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Article
 * Id: e45f98c8-9175-4894-b5a7-7e996a4235e4
 * Codename: article
 */
export type Article = IContentItem<{
  /**
   * Abstract (text)
   * Required: false
   * Id: 227c0a71-1a5e-403f-9e49-8c5d7fa4f860
   * Codename: abstract
   *
   * Don't make it too long. At this point users decides, whether they want to continue reading!
   */
  abstract: Elements.TextElement;

  /**
   * Article type (taxonomy)
   * Required: false
   * Id: 71c195b1-521c-49e3-85ed-e39b114b6673
   * Codename: article_type
   */
  articleType: Elements.TaxonomyElement<ArticleType>;

  /**
   * Author (modular_content)
   * Required: true
   * Id: cbc1433d-6449-4ce8-bdd6-215eb92362c5
   * Codename: author
   */
  author: Elements.LinkedItemsElement<Person>;

  /**
   * Content (rich_text)
   * Required: true
   * Id: 744d0b97-7fd9-48ed-832a-f153dcf75532
   * Codename: content
   */
  content: Elements.RichTextElement;

  /**
   * Hero Image (asset)
   * Required: true
   * Id: 7735f75c-88d7-4f3a-a66b-c0d2338af4c8
   * Codename: hero_image
   */
  heroImage: Elements.AssetsElement;

  /**
   * Publishing date (date_time)
   * Required: true
   * Id: ceb09050-d3e8-4e62-8f07-ea12d4b9e59d
   * Codename: publishing_date
   */
  publishingDate: Elements.DateTimeElement;

  /**
   * Slug (url_slug)
   * Required: true
   * Id: 1c06cbbc-914d-4305-a44a-67467d7c51a4
   * Codename: slug
   */
  slug: Elements.UrlSlugElement;

  /**
   * Title (text)
   * Required: true
   * Id: 390ac36a-028a-4bf6-bc1c-f3ab2f0f4e8f
   * Codename: title
   *
   * You can use online tools get score on your titles and incrementally improve it.
   */
  title: Elements.TextElement;
}> &
  SEOMetadata;
