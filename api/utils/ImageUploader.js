const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1} = require('uuid');

require('dotenv').config()
const mime = require("mime-types");

class ImageUploader
{
    connectionString;

    constructor()
    {
        this.connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

        if (!this.connectionString) {
            throw new Error("Azure Storage Connection String not found");
        }
    }

    async upload(file, type)
    {
        const blobServiceClient = BlobServiceClient.fromConnectionString(this.connectionString);
        
        const containerClient = blobServiceClient.getContainerClient("images");
        
        const blobName = `${uuidv1()}.${mime.extension(type)}`;

        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        try {
            await blockBlobClient.upload(file, file.length);

            return blockBlobClient.url;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = ImageUploader;