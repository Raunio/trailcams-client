export class ImageUtil {
    static getCssUrlFromBase64Data(mimetype: string, data: string) {
        return `data:${mimetype};base64,${data}`;
    }
}
