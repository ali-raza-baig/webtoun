
import crypto from 'crypto';

export const hashedToken = () => {

    return crypto.randomBytes(32).toString('hex');
}




