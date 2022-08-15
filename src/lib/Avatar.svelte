<script>
  export let initials = null;
  export let avatar_img = '/avatar.svg'
</script>

<a href="#/user">
  {#if !initials}
  <div class="flex items-center p-2 text-base font-normal text-grey-50 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-8 h-8 text-gray-50 transition duration-75 gray-50">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>
  </div>

  {:else}
  <div class="flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-gray-50">
    <span class="font-medium text-gray-50">{initials}</span>
  </div>
  {/if}
</a>
