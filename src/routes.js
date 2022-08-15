import NotFound from './routes/NotFound.svelte';
import Dashboard from './routes/Dashboard.svelte';
import Sources from './routes/Sources.svelte';
import SourceView from './routes/SourceView.svelte';
import Story from './routes/Story.svelte';

export const routes = {
  '/': Dashboard,
  '/sources': Sources,
  '/source/:source_uuid': SourceView,
  '/story': Story,
  '*': NotFound
};
