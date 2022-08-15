<script>
  import {data} from './test.js';
  import {link} from 'svelte-spa-router';
  import StatusBadge from '../components/StatusBadge.svelte';
</script>

<div class="container my-12 px-4 md:px-12 mx-auto">
  <div class="flex flex-wrap mx">
    {#each data as source}
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article class="overflow-hidden rounded-md shadow-sm border-2 border-gray-400 border-dotted">
          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg font-semibold">{source.name}</h1>
            <StatusBadge color={source.status.color} message={source.status.message.toUpperCase()} />
          </header>
          <content class="flex items-center justify-start leading-tight p-2 pb-0 md:p-4 font-mono">
            <span class="font-semibold pr-1">Status:</span>
            {#if source.description}
              {source.description}
            {:else}
              Status description unavailable.
            {/if}
          </content>
          <footer class="flex items-center justify-end leading-none p-2 md:p-4">
            <a href="/source/{source.uid}" class="pr-1" use:link>
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
            </a>
          </footer>
        </article>
    </div>
    {/each}
  </div>
</div>