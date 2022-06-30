package ImageReader;

public class Factory {
	
	public ImageReader getImageType(String imageType) {
		switch (imageType) {
		case "gif": {
			return new GifReader();
		}
		case "GIF": {
			return new GifReader();
		}
		case "JPEG":{
			return new JpegReader();
		}
		case "jpeg":{
			return new JpegReader();
		}
		default:
			return null;
		}
	}

}
