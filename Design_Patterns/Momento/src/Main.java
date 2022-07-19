import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		List<Cricket.Memento> savedScore = new ArrayList<Cricket.Memento>();
		   
        Cricket cri = new Cricket();
   
        //1st inning score
        cri.set("0");
        savedScore.add(cri.saveToMemento());
        cri.set("200");
        savedScore.add(cri.saveToMemento());
        cri.set("300");
        savedScore.add(cri.saveToMemento());
        cri.set("400");
   
        cri.restoreFromMemento(savedScore.get(0)); 

	}

}
