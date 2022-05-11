import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	telemetry: false,
	builder: "vite",
	target: "static",
	ssr: false
});
