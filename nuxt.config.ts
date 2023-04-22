// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    app:{
        head:{
            title: 'Nuxt Dojo',
            meta: [
                {name: 'description', content: 'Everything about Nuxt 3'}
            ]
        }
    }
})
