class FileService {
  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/files/image', {
      body: formData,
      method: 'POST',
    });

    const { url } = await res.json();

    return url as string;
  }
}

export const fileService = new FileService();
