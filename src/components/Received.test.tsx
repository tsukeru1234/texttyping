import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'

import Received from "./Received";

describe('button and radio', () => {
    const { container } = render(<Received />);
    it('button click span[]', async() => {
        const user = userEvent.setup();

        const button = screen.getByRole('button');
        await user.click(button);

        const spans = container.querySelectorAll('span');
        expect(spans.length).toBeGreaterThan(0);
        expect(spans[0].tagName).toBe('SPAN');
    });
    it('radio easy', async() => {
        const user = userEvent.setup();

        const easyRadio = screen.getByDisplayValue('easy');
        const mediumRadio = screen.getByDisplayValue('medium');
        const hardRadio = screen.getByDisplayValue('hard');
        
        await user.click(easyRadio)
        expect(easyRadio).toBeChecked();
        expect(mediumRadio).not.toBeChecked();
        expect(hardRadio).not.toBeChecked();


    });
    it('radio medium', async() => {
        const user = userEvent.setup();

        const easyRadio = screen.getByDisplayValue('easy');
        const mediumRadio = screen.getByDisplayValue('medium');
        const hardRadio = screen.getByDisplayValue('hard');
        

        await user.click(mediumRadio)
        expect(easyRadio).not.toBeChecked();
        expect(mediumRadio).toBeChecked();
        expect(hardRadio).not.toBeChecked();
    });
    it('radio hard', async() => {
        const user = userEvent.setup();

        const easyRadio = screen.getByDisplayValue('easy');
        const mediumRadio = screen.getByDisplayValue('medium');
        const hardRadio = screen.getByDisplayValue('hard');

        await user.click(hardRadio)
        expect(easyRadio).not.toBeChecked();
        expect(mediumRadio).not.toBeChecked();
        expect(hardRadio).toBeChecked();
    });
});
