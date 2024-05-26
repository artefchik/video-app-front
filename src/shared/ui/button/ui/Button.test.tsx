import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/button/ui/Button';

describe('Button', () => {
    test('b', async () => {
        const { getByText } = render(<Button>Button</Button>);
        const helloWorldElement = getByText(/Button/i);

        expect(helloWorldElement);
    });
});
