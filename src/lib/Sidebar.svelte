<script>
  import Avatar from './Avatar.svelte';
</script>

<div class="flex flex-1 flex-col w-50 h-screen px-2 pt-8 border-r justify-between bg-gray-900">
  <div class="overflow-y-auto justify-center mt-4">
    <aside>
      <ul class="space-y-3">
        <li>
          <a href="#" class="flex items-center p-2 text-gray-50 rounded-full border-gray-50 border-[1px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16" data-tooltip-target="dashboard-tooltip" data-tooltip-placement="right">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <div id="dashboard-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
              Dashboard
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-50 rounded-full border-gray-50 border-[1px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16" data-tooltip-target="datasources-tooltip" data-tooltip-placement="right">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
            </svg>
            <div id="datasources-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
              Data Sources
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  </div>
  <div class="flex flex-col pb-2 mx-auto">
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

<!--
<div id="navigation" class="fixed h-screen p-4 bg-gray-800 w-20 justify-between flex flex-1 flex-col" tabindex="-1">
  <!-- Begin top section -
  <div class="py-4 overflow-y-auto mx-auto">
    <ul class="space-y-2">
      <li>
        <a href="#/" class="flex items-center p-2 text-base font-normal text-grey-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16" data-tooltip-target="dashboard-tooltip" data-tooltip-placement="right">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          <div id="dashboard-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
            Dashboard
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </a>
      </li>
      <li>
        <a href="#/sources" class="flex items-center p-2 text-base font-normal text-grey-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition duration-75 stroke-gray-50 stroke-[0.75px]" viewBox="0 0 16 16" data-tooltip-target="sources-tooltip" data-tooltip-placement="right">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
          </svg>
          <div id="sources-tooltip" role="tooltip" class="inline-block fixed py-2 px-3 text-xs font-light bg-gray-50 text-gray-800 rounded-lg shadow-sm opacity-0 border-[1px] border-gray-800 tooltip dark:bg-gray-700">
            Data Sources
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <div class="flex flex-col pb-10 overflow-y-auto mx-auto">
    <!-- Begin bottom section -
    <div class="flex flex-row pb-10">
      <ul class="space-y-2">
        <Avatar initials='WP' />
      </ul>
    </div>
    <div class="flex flex-row items-center mx-auto pt-2">
      <div class="flex items-center">
        <span class="text font-mono font-thin text-xs text-gray-50">0.1-a</span>
      </div>
    </div>
  </div>
</div>-->
