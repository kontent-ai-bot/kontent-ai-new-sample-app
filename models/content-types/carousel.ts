import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type CallToAction } from './callToAction';
import { type HeroUnit } from './heroUnit';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Carousel
 * Id: f1e220f9-76af-4c78-8137-e2bfa026e320
 * Codename: carousel
 */
export type Carousel = IContentItem<{
  /**
   * Elements (modular_content)
   * Required: true
   * Id: fb6b765a-1d09-4d98-81db-66bc3a63c487
   * Codename: hero_units
   */
  heroUnits: Elements.LinkedItemsElement<HeroUnit | CallToAction>;
}>;
