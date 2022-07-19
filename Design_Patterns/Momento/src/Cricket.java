
public class Cricket {

	private String score;
	   
    public void set(String score) 
    {
        System.out.println("Setting Score to " + score);
        this.score = score;
    }
   
    public Memento saveToMemento() 
    {
        System.out.println("Saving Score to Memento");
        return new Memento(score);
    }
   
    public void restoreFromMemento(Memento memento) 
    {
    	score = memento.getSavedScore();
        System.out.println("Time restored from Memento: " + score);
    }
   
    public static class Memento 
    {
        private final String score;
   
        public Memento(String scoreToSave) 
        {
        	score = scoreToSave;
        }
   
        public String getSavedScore() 
        {
            return score;
        }
    }
}