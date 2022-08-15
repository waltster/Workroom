<script>
  import './app.css';
  import {routes} from "./routes.js";
  import Router from 'svelte-spa-router';
  import Sidebar from './components/Sidebar.svelte';
</script>

<div class="flex">
  <Sidebar />
  <div class="w-full h-full p-4 m-8 overflow-y-auto">
    <div class="flex border-4 border-dotted">
      <Router {routes} />
    </div>
  </div>
</div>
