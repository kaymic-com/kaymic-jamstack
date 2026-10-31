import { defineNuxtModule } from "@nuxt/kit";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export default defineNuxtModule({
  meta: {
    name: "contentful-typegen",
  },

  setup(_, nuxt) {
    const generate = async () => {
      const spaceId = process.env.NUXT_CONTENTFUL_SPACE_ID;
      const token = process.env.NUXT_CONTENTFUL_MANAGEMENT_TOKEN;

      if (!spaceId || !token) {
        throw new Error("Missing Contentful typegen credentials");
      }

      await execFileAsync("npx", [
        "cf-content-types-generator",
        "-s",
        spaceId,
        "-t",
        token,
        "-e",
        process.env.NUXT_CONTENTFUL_ENVIRONMENT || "master",
        "-o",
        "shared/types/contentful",
        "-d", // JSDoc
        "-r", // Response types
        "-g", // Type guards
      ]);

      console.info("Generated Contentful TypeScript types");
    };

    nuxt.hook("ready", generate);
    nuxt.hook("build:before", generate);
  },
});
