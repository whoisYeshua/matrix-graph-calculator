<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte'
</script>

<div
  class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 'bg-base-100 text-base-content">
  <nav class="navbar w-full">
    <div class="flex flex-1 md:gap-1 lg:gap-2">
      <span
        class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
        data-tip="Menu">
        <label for="drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </span>
      <div class="flex items-center gap-2 lg:hidden">
        <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" class="h-8 w-8">
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
    </div>
    <div class="flex-0">
      <ThemeToggle />

      <span
        class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
        data-tip="GitHub">
        <div class="flex-none items-center">
          <a
            aria-label="Github"
            target="_blank"
            href="https://github.com/whoisYeshua/matrix-graph-calculator"
            rel="noopener external"
            class="btn btn-ghost drawer-button btn-square normal-case !outline-none focus-visible:!outline-current">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="inline-block h-5 w-5 fill-current md:h-6 md:w-6">
              <path
                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
            </svg>
          </a>
        </div>
      </span>
    </div>
  </nav>
</div>
