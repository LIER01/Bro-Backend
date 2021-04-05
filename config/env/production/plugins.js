module.exports = ({ env }) => ({
    upload: {
        provider: "aws-s3",
        providerOptions: {
            accessKeyId: env("BUCKETEER_AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("BUCKETEER_AWS_SECRET_ACCESS_KEY"),
            region: env("BUCKETEER_AWS_REGION"),
            params: {
                Bucket: env("BUCKETEER_BUCKET_NAME"),
            },
        },
    },
});