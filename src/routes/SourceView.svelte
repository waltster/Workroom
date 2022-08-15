<script>
  // TODO: Import actual data via api.
  import {data} from './test.js';
  import {link} from 'svelte-spa-router';
  import LargeStatusBadge from '../components/LargeStatusBadge.svelte';
	import { onMount } from 'svelte'
  import decodeStatus from '../helpers/StatusHelper.js';

  export let params = {};
  let source = null;

  for(const obj of data){
    if(obj.uid == params.source_id){
      source = obj;
    }
  }
</script>

<div class="w-full">
  <div class="flex pl-4">
    <div class="rounded-lg px-2 py-1 bg-gray-50 text-gray-900 border-[1px] border-gray-900">
      <a href="/sources" use:link class="flex rounded items-center" rel="external">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline pr-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        All Sources
      </a>
    </div>
  </div>
  {#if source}
  <div class="flex flex-1 flex-col border-4 border-dotted m-3 p-4 bg-gray-100 shadow-sm">
    <div class="overflow-hidden">
      <div class="flex justify-between leading-tight items-center">
        <h2 class="text-3xl">
          {source.name}
        </h2>
        <LargeStatusBadge color={decodeStatus(source.status).color} message={decodeStatus(source.status).level.toUpperCase()} />
      </div>
      <div class="flex justify-between border-b-2 border-gray-300 pb-2">
        <span class="text-md font-mono">Data Source #{source.uid}</span>
      </div>
      <div class="pt-3">
        <div class="flex justify-start">
          <h3 class="text-lg font-mono underline">Reporting</h3>
        </div>
        <div class="flex justify-start">
          <p class="pl-5 font-mono text-sm pr-1 underline">Source Type:</p>
          <p class="font-mono text-sm">{source.type || "Unknown"}</p>
        </div>
        <div class="flex justify-start">
          <p class="pl-5 font-mono text-sm pr-1 underline">Source Reporting:</p>
          <p class="font-mono text-sm">{source.description || "No reported activity."}</p>
        </div>
      </div>
    </div>
  </div>
  {:else}
  <div class="flex">
    Source does not exist
  </div>
  {/if}
</div>
