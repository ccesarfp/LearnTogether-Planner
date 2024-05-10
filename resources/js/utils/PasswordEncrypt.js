export function encrypt(password) {
    if (password === '') {
        return null;
    }

    const encoded = new TextEncoder().encode(password);
    return crypto.subtle.digest('SHA-256', encoded)
        .then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray
                .map((bytes) => bytes.toString(16).padStart(2, '0'))
                .join('');
        });
}
