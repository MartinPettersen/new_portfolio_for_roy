import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './sanity/schemas';


if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable");
}

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    title: "Roy's Portfolio Website",
    apiVersion: "2025-03-04",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas}
});
export default config