import { createRoot } from 'react-dom/client';
import { RouteProvider } from '@/app/providers/ui/RouteProvider';
import '@/app/styles/index.scss';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(
    <RouteProvider />,
);
