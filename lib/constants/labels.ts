import { PerCollection } from "../types/perCollection";

export const perCollectionSEOTitle = {
    ficto_healthtech: "Ficto Healthtech",
    ficto_healthtech_imaging: "Ficto Healthtech Imaging",
    ficto_healthtech_surgical: "Ficto Healthtech Surgical"
  } as const satisfies PerCollection<string>;