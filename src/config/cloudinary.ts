interface CloudinaryImage {
  url: string;
  height: number;
  width: number;
  format: string;
  public_id: string;
  created_at: string;
  bytes: number;
  version: number;
}
// const PRESET_CLOUDINARY: string = process.env.NEXT_PUBLIC_PRESET_CLOUDINARY || '';
export async function uploadToCloudinary(files: File): Promise<CloudinaryImage | null> {
  const APIKEY_CLOUDINARY: string = process.env.NEXT_PUBLIC_APIKEY_CLOUDINARY || '';
  const NAME_CLOUD_CLOUDINARY: string = process.env.NEXT_PUBLIC_NAME_CLOUD_CLOUDINARY || '';
  const PRESET_CLOUDINARY: string = process.env.NEXT_PUBLIC_PRESET_CLOUDINARY || '';

  const formData = new FormData();
  formData.append('file', files);
  formData.append('upload_preset', PRESET_CLOUDINARY);
  formData.append('timestamp', String(Date.now() / 1000));
  formData.append('api_key', APIKEY_CLOUDINARY);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${NAME_CLOUD_CLOUDINARY}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    const image: CloudinaryImage = {
      url: result.url,
      height: result.height,
      width: result.width,
      format: result.format,
      public_id: result.public_id,
      created_at: result.created_at,
      bytes: result.bytes,
      version: result.version,
    };

    return image;
  } catch (error) {
    console.error(error);
    return null;
  }
}