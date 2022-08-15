<script>
  import './app.css';
  import Header from './lib/Header.svelte';
  import Sidebar from './lib/Sidebar.svelte';
</script>

<div class="flex">
  <Sidebar />
  <div class="w-full h-full p-4 m-8 overflow-y-auto">
    <div class="flex border-4 border-dotted">
      Content
    </div>
  </div>
</div>
