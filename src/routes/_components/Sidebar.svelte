<script lang="ts">
  import { page } from '$app/stores'
  import { pages } from './pages'

  export let closeDrawer: () => void
</script>

<div
  class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex mb-4">
  <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" class="h-12 w-12">
      <path
        stroke-width="1.5"
        stroke="currentColor"
        d="M18.8 37c0 1.2-1 2.3-2.2 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.2 2.3-2.2 1.2 0 2.2 1 2.2 2.2ZM38.1 34.5c0 1.2-1 2.3-2.3 2.3-1.2 0-2.2-1-2.2-2.3 0-1.2 1-2.2 2.2-2.2 1.3 0 2.3 1 2.3 2.2ZM29.8 18.6c0 1.2-1 2.2-2.3 2.2-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.3 0 2.3 1 2.3 2.2Z" />
      <path
        stroke-linecap="round"
        stroke-width="1.5"
        stroke="currentColor"
        d="m14.5 12.9 9 4.4m6.7 4.6 4 9M32 35.2 20.7 37m-2.4-3.6L25 22" />
      <path
        stroke-width="1.5"
        stroke="currentColor"
        d="M13.2 11c0 1.2-1 2.2-2.2 2.2-1.2 0-2.3-1-2.3-2.2 0-1.2 1-2.3 2.3-2.3 1.2 0 2.2 1 2.2 2.3Z" />
      <path
        fill="currentColor"
        d="m37.4 18.7-.4-.6.4.6Zm2-2.1.6.3-.7-.3Zm.3-2.8.8-.1h-.8Zm-1.2-2.6.5-.5-.5.5ZM36 9.7l.2-.7-.2.7Zm-2.9.2.3.7-.3-.7Zm-2.3 1.7.6.4-.6-.4Zm-1.2 2.8.3.7-.7.3-.3-.7.7-.3Zm2 5.6a.7.7 0 1 1 0-1.5V20ZM28 12.5a.8.8 0 0 1 1.3-.6l-1.3.6Zm3.4.2a.7.7 0 1 1 .6 1.4l-.6-1.4Zm3.1 6c.9 0 1.7-.2 2.4-.6l.8 1.3c-1 .5-2.1.8-3.2.8v-1.5ZM37 18c.7-.4 1.3-1 1.6-1.8l1.4.6c-.5 1-1.3 1.9-2.2 2.5L37 18Zm1.6-1.8c.4-.8.5-1.6.4-2.4l1.5-.2c.1 1 0 2.2-.5 3.2l-1.4-.6Zm.4-2.4c-.1-.8-.5-1.6-1-2.2l1-1c.8.8 1.3 1.8 1.5 3l-1.5.2Zm-1-2.2c-.6-.6-1.4-1-2.2-1.2l.4-1.5c1 .3 2 .9 2.8 1.7l-1 1Zm-2.2-1.2c-.8-.2-1.6-.2-2.4 0l-.5-1.3c1-.4 2.2-.5 3.3-.2l-.4 1.5Zm-2.4 0c-.8.4-1.5.9-2 1.5l-1.2-.8c.7-1 1.6-1.6 2.7-2l.5 1.4Zm-2 1.5-.5 1.1-.3.7-.3.9L29 14l.3-.8.3-.7c.1-.5.4-1 .7-1.4l1.2.8Zm.2 6.5 3 .2v1.5l-3-.2v-1.5Zm-2.7-3.8-.8-2.2 1.3-.6 1 2.2-1.5.6Zm.4-1 2.2-1 .6 1.4-2.2 1-.6-1.4Z" />
    </svg>
  </a>
</div>

{#each pages as { name, items }}
  <ul class="menu menu-compact flex flex-col p-0 px-4">
    {#if name}
      <li />
      <li class="menu-title"><span>{name}</span></li>
    {/if}

    {#each items as { name, href, icon }}
      <li>
        <a
          sveltekit:prefetch
          {href}
          on:click={closeDrawer}
          id={$page.url.pathname.startsWith(href + '/') ? 'active-menu' : ''}
          class={`flex gap-4 ${$page.url.pathname == href ? 'active' : ''} ${
            $page.url.pathname.startsWith(href + '/') ? 'active' : ''
          }`}>
          {#if icon != ''}
            <span class="flex-none">
              {@html icon}
            </span>
          {/if}
          <span class="flex-1">
            {@html name}
          </span>
        </a>
      </li>
    {/each}
  </ul>
{/each}
