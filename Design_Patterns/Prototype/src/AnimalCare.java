import java.util.HashMap;
import java.util.Map;

public class AnimalCare {
	
	private static Map<String, Animal> animalMap = new HashMap<String, Animal>();
    
    static{
    	animalMap.put("cat", new Cat());
    	animalMap.put("dog", new Dog());
    }
      
    public static Animal getAnimal(String colorName){
        return (Animal) animalMap.get(colorName).clone();
    }
}
