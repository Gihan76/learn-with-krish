package ImageReader;

public class Main {

	public static void main(String[] args) {
		
		Factory factory = new Factory();
		
		ImageReader imageReader = factory.getImageType("gif");
		imageReader.imageType();
		
		ImageReader imageReader2 = factory.getImageType("JPEG");
		imageReader2.imageType();
		
	}

}
