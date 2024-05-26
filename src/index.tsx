import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import { RouteProvider } from '@/app/providers/router';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(
    <RouteProvider/>

);
