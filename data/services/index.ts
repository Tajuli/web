import { facebookMarketing } from "./facebook-marketing";
import { googleAds } from "./google-ads";
import { tiktokMarketing } from "./tiktok-marketing";
import { seo } from "./seo";
import { websiteDevelopment } from "./website-development";
import { softwareDevelopment } from "./software-development";
import { socialMediaManagement } from "./social-media-management";
import { videoProduction } from "./video-production";
import { contentBranding } from "./content-branding";

import type { ServiceData } from "./types";

export const services: Record<
  string,
  ServiceData
> = {
  [facebookMarketing.slug]: facebookMarketing,

  [googleAds.slug]: googleAds,

  [tiktokMarketing.slug]: tiktokMarketing,

  [seo.slug]: seo,

  [websiteDevelopment.slug]:
    websiteDevelopment,

  [softwareDevelopment.slug]:
    softwareDevelopment,

  [socialMediaManagement.slug]:
    socialMediaManagement,

  [videoProduction.slug]:
    videoProduction,

  [contentBranding.slug]:
    contentBranding,
};

export function getAllServices(): ServiceData[] {
  return Object.values(services);
}

export function getServiceBySlug(
  slug: string
): ServiceData | undefined {
  return services[slug];
}

export function getRelatedServices(
  currentSlug: string
): ServiceData[] {
  const service = getServiceBySlug(currentSlug);

  if (!service) {
    return [];
  }

  return service.related
    .map((slug) => services[slug])
    .filter(Boolean);
}

export function getFeaturedServices(
  limit = 3
): ServiceData[] {
  return getAllServices().slice(0, limit);
}
