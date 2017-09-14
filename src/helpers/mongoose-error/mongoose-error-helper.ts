export const MongooseErrorHelper = {
    use: (err: any[]) => {
        return Object.keys(err).map((key) => err[key].message);
    }
};
