import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import schemas from "./schemas"
import { unsplashImageAsset, unsplashAssetSource } from "sanity-plugin-asset-source-unsplash"
// import 'easymde/dist/easymde.min.css'

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: "production",
    title: "Admin",
    apiVersion: "2023-03-09",
    basePath: "/admin",
    plugins: [structureTool(), unsplashImageAsset()],
    schema: { types: schemas },
    form: {
        image: {
            assetSources: (previousAssetSources, { schema }) => {
                if (schema.name === 'movie-image') {
                    // remove unsplash from movie-image types
                    return previousAssetSources.filter((assetSource) => assetSource !== unsplashAssetSource)
                }
                return previousAssetSources
            },
        },
    },
})

export default config