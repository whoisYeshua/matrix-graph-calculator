<script context="module" lang="ts">
  import type { ErrorLoad } from '@sveltejs/kit'

  import SEO from './_components/SEO.svelte'

  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        status: status,
        message: error?.message
      }
    }
  }
</script>

<script lang="ts">
  export let status: number
  export let message: string
</script>

<SEO title={String(status)} />

<div class="hero not-prose min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl">
        {status}
      </h1>
      <p class="mb-5">
        {message}
      </p>
      <a class="btn" href="/">Go back</a>
    </div>
  </div>
</div>
