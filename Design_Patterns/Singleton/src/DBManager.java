import javax.management.RuntimeErrorException;

public class DBManager {
	private static volatile DBManager dbManager;
	
	private DBManager() {
		if (dbManager != null) {
			throw new RuntimeErrorException(null,"Please use the existing DB Instance");
		}
	}
	
	public static DBManager getDbManager() {
		if (dbManager == null) {
			synchronized (DBManager.class) {
				if(dbManager == null) {
					dbManager = new DBManager();
				}
			}
		}
		return dbManager;
	}
}
