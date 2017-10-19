import * as crypto from "crypto";

const options = {
    salt: {
        length: 32,
        format: 'hex'
    }
};

interface HashResult {
    salt: string | Buffer,
    hash: string,
}

export class Crypto {

    public static generateSalt(length: number): string {
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString(options.salt.format)
            .slice(0, length);
    }

    public static createHash(value, salt, algorithm, encoding: crypto.HexBase64Latin1Encoding) {
        const hash = crypto.createHmac(algorithm, salt);
        hash.update(value);
        const result = hash.digest(encoding);
        return {
            salt: salt,
            hash: result,
        };
    }

    public static sha512Hash(value: string, salt: string | Buffer): HashResult {
        const saltValue = salt || Crypto.generateSalt(options.salt.length);
        return Crypto.createHash(value, saltValue, 'sha512', 'hex');
    }

}
