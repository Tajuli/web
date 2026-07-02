import { facebookMarketing } from "./service/facebook-marketing";
import { googleAds } from "./service/google-ads";
import { tiktokMarketing } from "./service/tiktok-marketing";
import { seo } from "./service/seo";
import { websiteDevelopment } from "./service/website-development";
import { softwareDevelopment } from "./service/software-development";
import { socialMediaManagement } from "./service/social-media-management";
import { videoProduction } from "./service/video-advertisement";
import { contentBranding } from "./service/content-creation-branding";

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
