import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button/Button';

describe('Button', () => {
    test('b', async () => {
        const { getByText } = render(<Button>Button</Button>);
        const helloWorldElement = getByText(/Button/i);

        expect(helloWorldElement);
    });
});
