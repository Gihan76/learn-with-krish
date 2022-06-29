
public class Main {

	public static void main(String[] args) {
		
		DBManager dbManager = DBManager.getDbManager();
		System.out.println(dbManager);
		
		DBManager dbManager2 = DBManager.getDbManager();
		System.out.println(dbManager2);
		
	}

}
