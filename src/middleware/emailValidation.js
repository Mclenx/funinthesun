export function validateEmail(req, res, next) {
    const { email } = req.body;

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // If valid, proceed to the next middleware or route handler
    next();
}
