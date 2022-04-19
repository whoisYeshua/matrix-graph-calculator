<script lang="ts">
  export let title = ''
  export let desc =
    'Calculators for basic needs for solving problems related to matrices and graphs'
  $: formattedTitle = title ? `${title} • Matrix/Graph calculator` : 'Matrix/Graph calculator'

  const rootUrl = import.meta.env.VITE_ROOT_URL
  const img = 'meta-img.png'
</script>

<svelte:head>
  <title>{formattedTitle}</title>
  <meta name="description" content={desc} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={rootUrl + img} />
  <meta name="twitter:image:alt" content={formattedTitle} />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={rootUrl + img} />
</svelte:head>
