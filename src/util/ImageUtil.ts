export class ImageUtil {
    static getCssUrlFromBase64Data(mimetype: string, data: string): string {
        return `data:${mimetype};base64,${data}`;
    }
}
