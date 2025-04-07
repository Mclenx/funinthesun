

import { NextResponse } from 'next/server';
import { validateEmail } from '../../middleware/emailValidation';

export function validateEmail(email) {
    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { error: 'Invalid email format' };
    }
    return { valid: true };
}

export async function POST(request) {

    const response = NextResponse;

    // Use the validateEmail middleware
    validateEmail(request, response, async () => {
        const { email } = await request.json();        
        const emailValidationResponse = validateEmail(email);
        if (emailValidationResponse.error) {
            return NextResponse.json({ error: emailValidationResponse.error }, { status: 400 });
        }


        // Basic email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Here you can add additional checks, such as checking if the email exists in the database

        return NextResponse.json({ message: 'Email is valid' }, { status: 200 });
    });
}
