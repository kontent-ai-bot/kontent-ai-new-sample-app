import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

import { Content } from "../components/shared/Content";
import { AppPage } from "../components/shared/ui/appPage";
import { getDefaultMetadata, getItemByCodename, getSiteMenu } from "../lib/kontentClient";
import { pageCodenames } from '../lib/routing';
import { ValidCollectionCodename } from "../lib/types/perCollection";
import { siteCodename } from "../lib/utils/env";
import { createElementSmartLink, createFixedAddSmartLink } from "../lib/utils/smartLinkUtils";
import { Block_Navigation, contentTypes, SEOMetadata, WSL_Page } from "../models";

type Props = Readonly<{
  page: WSL_Page;
  siteCodename: ValidCollectionCodename;
  siteMenu: Block_Navigation;
  defaultMetadata: SEOMetadata;
}>;

interface IParams extends ParsedUrlQuery {
  slug: keyof typeof pageCodenames
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(pageCodenames).map(slug => (
    { params: { slug } }
  ))
  return {
    paths,
    // TODO decide the behavior
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps<any, IParams> = async (context) => {
  // TODO break hardcoding
  const slug = context.params?.slug;

  if (!slug) {
    return {
      redirect: {
        destination: '/404',
        permanent: true
      }
    };
  }
  const pageCodename = pageCodenames[slug];

  const siteMenu = await getSiteMenu(!!context.preview);
  const defaultMetadata = await getDefaultMetadata(!!context.preview);

  const page = await getItemByCodename<WSL_Page>(pageCodename, !!context.preview);
  if (page === null) {
    return {
      notFound: true
    };
  }

  return {
    props: { page, siteCodename, siteMenu, defaultMetadata },
  };
}

const TopLevelPage: FC<Props> = props => (
  <AppPage
    siteCodename={props.siteCodename}
    siteMenu={props.siteMenu}
    defaultMetadata={props.defaultMetadata}
    item={props.page}
    pageType="WebPage"
  >
    <div
      {...createElementSmartLink(contentTypes.page.elements.content.codename)}
      {...createFixedAddSmartLink("end")}
    >
      {props.page.elements.content.linkedItems.map(piece => (
        <Content
          key={piece.system.id}
          item={piece as any}
        />
      ))}
    </div>
  </AppPage>
);

export default TopLevelPage;
