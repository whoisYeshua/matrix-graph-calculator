<script lang="ts">
  import '../app.css'

  import Navbar from './_components/Navbar.svelte'
  import Sidebar from './_components/Sidebar.svelte'

  let checked = false
  function closeDrawer() {
    checked = false
  }
</script>

<div class="bg-base-100 drawer drawer-mobile">
  <input id="drawer" type="checkbox" class="drawer-toggle" bind:checked />
  <div class="drawer-content" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
    <Navbar />
    <div class="p-6 pb-16">
      <slot />
    </div>
  </div>
  <div class="drawer-side" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
    <label for="drawer" class="drawer-overlay" />
    <aside class="bg-base-200 w-80">
      <Sidebar {closeDrawer} />
      <div
        class="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent" />
    </aside>
  </div>
</div>
