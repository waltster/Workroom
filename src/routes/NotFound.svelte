<script>
import {link, location} from "svelte-spa-router";
</script>

<div class="flex flex-1 flex-col items-center justify-center align-center pt-10">
  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-20 h-20 stroke-[0.5px]" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
    </svg>
  </div>
  <div class="flex flex-col pt-10">
    <h1 class="text-2xl font-bold font-mono">404: Could not find that page.</h1>
  </div>
  <div class="flex flex-col pt-10">
    <h1 class="text-l font-mono font-base">This typically happens when a resource has been deleted or when a link was typed incorrectly.</h1>
  </div>
  <div class="flex flex-col pt-10">
    <h1 class="text-md font-mono font-base">Here's the URL to report broken: <code class="bg-gray-200">{$location}</code></h1>
  </div>
</div>
