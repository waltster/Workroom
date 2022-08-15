import NotFound from './routes/NotFound.svelte';
import Dashboard from './routes/Dashboard.svelte';
import Sources from './routes/Sources.svelte';

export const routes = {
  '/': Dashboard,
  '/sources': Sources,
  '*': NotFound
};
