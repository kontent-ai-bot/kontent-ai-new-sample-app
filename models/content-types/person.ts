import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Person
 * Id: 7f460e72-16d1-4403-b084-d01edcbcc578
 * Codename: person
 */
export type Person = IContentItem<{
  /**
   * Bio (rich_text)
   * Required: false
   * Id: a8786f1b-3e3c-42e1-92ae-9ef9cf53864c
   * Codename: bio
   */
  bio: Elements.RichTextElement;

  /**
   * First Name (text)
   * Required: true
   * Id: 0cfa6910-1b04-4489-a352-d15970f7357c
   * Codename: first_name
   */
  firstName: Elements.TextElement;

  /**
   * Last Name (text)
   * Required: true
   * Id: 07994d54-d6a1-45e4-82cb-7094a29813b8
   * Codename: last_name
   */
  lastName: Elements.TextElement;

  /**
   * Occupation (text)
   * Required: false
   * Id: 135f68aa-c374-4a37-ac04-990f53061c9f
   * Codename: occupation
   */
  occupation: Elements.TextElement;

  /**
   * Photograph (asset)
   * Required: false
   * Id: b31f2ae2-7db3-494a-a871-edf79923a2a7
   * Codename: photograph
   */
  photograph: Elements.AssetsElement;
}>;
