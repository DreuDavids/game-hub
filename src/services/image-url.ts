import noImage from "../assets/no-image.webp";
/**
 * The rawg api allows for cropping of an image by providing media/cropRatio/ratio in the url
 * slicing the url here to add the desired crop ratio(600x400) so we get a smaller optimized image
 */

const getCroppedImageUrl = (url: string) => {
    //if no image use default placeholder image
    if(!url) return noImage;

    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/'+ url.slice(index);
}

export default getCroppedImageUrl;