<script lang="ts">
  import SEO from './_components/SEO.svelte'
  import { pages } from './_components/pages'

  const totalPages = pages.flatMap(el => el.items.map(sec => sec.name)).length
</script>

<SEO />

<div class="flex flex-col gap-6">
  <div class="prose max-w-4xl flex-grow">
    <h1>Solutions</h1>
    <p>Total: {totalPages}</p>
  </div>
  <div class="prose max-w-4xl flex-grow">
    {#each pages as { name, items }}
      <h2>{name}</h2>

      <div class="not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as { name, href }}
          <a
            class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
            {href}>
            <figure class="px-4 pt-4">
              <img
                src={`/images${href}.jpg`}
                class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                alt={name} />
            </figure>
            <div class="card-body">
              <h3 class="card-title">{name}</h3>
            </div>
          </a>
        {/each}
      </div>
    {/each}
  </div>
</div>
