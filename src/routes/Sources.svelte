<script>
  import {config} from '../../config.js';
  import {link} from 'svelte-spa-router';
  import StatusBadge from '../components/StatusBadge.svelte';
  import decodeStatus from '../helpers/StatusHelper';
  import * as PaceHelper from '../helpers/PaceHelper';

  var sources = [];

  async function fetchSources(){
    sources = await PaceHelper.fetchSources();
    return;
  }
</script>

<svelte:head>
	<title>Workroom - Data Sources</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="w-full bg-gray-100 shadow-sm border-4 border-dotted">
  <div class="flex m-4">
    <div>
      <h1 class="text-3xl">Data Sources</h1>
    </div>
  </div>
  {#await fetchSources()}
    Loading...
  {:then}
    <div class="flex border-b-[2px] m-4 pb-2 border-gray-300">
      <p class="font-mono text-md">Total: {sources.length} sources</p>
    </div>
    {#if sources.length <= 0}
      <div class="flex flex-wrap flex-row pl-4 pb-4">
          <div class="flex flex-col">
            <h1 class="font-semibold text-xl">There are currently no data sources to display.</h1>
          </div>
          <div class="flex flex-col pt-2">
            <p class="font-base text-md">
              If you believe this is an error, please verify that you have permission to view this page and that
              you are using the correct account to do so.
            </p>
          </div>
      </div>
    {:else}
      <div class="flex flex-wrap flex-row pl-4 pb-4">
        {#each sources as source}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-md shadow-md border-2 border-gray-400 border-dotted bg-gray-50">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-md font-semibold font-mono">{source.name}</h1>
                <StatusBadge color={decodeStatus(source.status).color} message={decodeStatus(source.status).level.toUpperCase()} />
              </header>
              <div class="flex items-center justify-start leading-tight p-2 pb-0 md:p-4 font-mono">
                <span class="text-sm font=light">
                {#if source.description}
                  {source.description}
                {:else}
                  Source description unavailable.
                {/if}
                </span>
              </div>
              <div class="flex items-center justify-start leading-tight p-2 pb-0 md:p-4 font-mono">
                <span class="font-semibold text-sm pr-1">Status:</span>
                <span class="text-sm font=light">
                  {#if source.status.description}
                    {source.status.description}
                  {:else}
                    Status description unavailable.
                  {/if}
                </span>
              </div>
              <footer class="flex items-center justify-between leading-none pl-4 pb-2 pr-2 md:pr-4 md:pl-4 md:pb-4">
                <p class="text-sm font-mono">
                  #{source.uuid}
                </p>
                <a href="/source/{source.uuid}" class="pr-1" rel="external" use:link>
                  <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-6 h-6 transition duration-75 stroke-gray-400 stroke-[0.5px]" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </a>
              </footer>
            </article>
          </div>
        {/each}
      </div>
    {/if}
  {/await}
</div>
