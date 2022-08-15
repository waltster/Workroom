<script>
  export let color = 'default';
  export let message = 'Info';
</script>

{#if color == 'blue'}
<div class="font-mono inline-block bg-blue-100 text-blue-800 border-[1.5px] border-blue-300 text-sm font-medium px-2.5 py-0.5 rounded-lg dark:bg-blue-200 dark:text-blue-800">
  {message}
</div>
{:else if color == 'red' }
<div class="font-mono inline-block bg-red-100 text-red-800 text-sm border-[1.5px] border-red-300 font-medium px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
  {message}
</div>
{:else if color == 'green' }
<div class="font-mono inline-block bg-green-100 text-green-800 border-[1.5px] border-green-300 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
  {message}
</div>
{:else if color == 'yellow'}
<div class="font-mono inline-block bg-yellow-100 text-yellow-800 border-[1.5px] border-yellow-300 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
  {message}
</div>
{:else if color == 'indigo'}
<div class="font-mono inline-block bg-indigo-100 text-indigo-800 border-[1.5px] border-indigo-300 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
  {message}
</div>
{:else if color == 'purple'}
<div class="font-mono inline-block bg-purple-100 text-purple-800 border-[1.5px] border-purple-300 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
  {message}
</div>
{:else if color == 'pink'}
<div class="font-mono inline-block bg-pink-100 text-pink-800 border-[1.5px] border-pink-300 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
  {message}
</div>
:else}
<div class="font-mono inline-block bg-gray-100 text-gray-800 border-[1.5px] border-gray-300 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
  {message}
</div>
{/if}
