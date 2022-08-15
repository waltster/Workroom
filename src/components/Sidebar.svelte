<script>
  import Avatar from './Avatar.svelte';
  import {link, location} from 'svelte-spa-router';
</script>

<div class="flex flex-1 flex-col w-20 h-screen px-4 pt-8 border-r justify-between bg-gray-900">
  <div class="overflow-y-auto justify-center mt-4">
    <aside class="flex">
      <ul class="space-y-3">
        <li>
          <a href="/" class="flex" data-tooltip-trigger="hover" data-tooltip-target="dashboard-tooltip" data-tooltip-placement="right" use:link>
            {#if $location == '/'}
            <span class="items-center p-2 rounded-full border-gray-50 border-[1px] text-gray-50 bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
            </span>
            {:else}
            <span class="items-center p-2 rounded-full border-gray-50 border-[1px] text-gray-50 bg-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
            </span>
            {/if}
            <div id="dashboard-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
              Dashboard
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </a>
        </li>
        <li>
          <a href="/sources" class="flex" data-tooltip-trigger="hover" data-tooltip-target="sources-tooltip" data-tooltip-placement="right" use:link>
            {#if $location.includes('/source')}
            <span class="items-center p-2 rounded-full border-gray-50 border-[1px] text-gray-50 bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
              </svg>
            </span>
            {:else}
            <span class="items-center p-2 rounded-full border-gray-50 border-[1px] text-gray-50 bg-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
              </svg>
            </span>
            {/if}
            <div id="sources-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
              Data sources
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </a>
        </li>
        <li>
          <a href="/story" class="flex" data-tooltip-trigger="hover" data-tooltip-target="story-tooltip" data-tooltip-placement="right" use:link>
            {#if $location == '/story'}
            <span class="items-center p-2 rounded-full border-gray-50 border-[1px] text-gray-50 bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
              </svg>
            </span>
            {:else}
            <span class="items-center p-2 rounded-full border-gray-50 border-[1px] text-gray-50 bg-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
              </svg>
            </span>
            {/if}
            <div id="story-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
              Story
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  </div>
  <div class="flex flex-col pb-5 mx-auto">
    <!-- Begin bottom section -->
    <div class="flex flex-row pb-2">
      <ul class="space-y-2">
        <Avatar initials='WP' />
      </ul>
    </div>
    <div class="flex flex-row items-center mx-auto pt-10">
      <div class="flex items-center">
        <span class="text font-mono font-thin text-xs text-gray-50">0.1-a</span>
      </div>
    </div>
  </div>
</div>
