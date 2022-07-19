
public class Main {

	public static void main(String[] args) {
		
		Employee emp = new EmployeeBuilder().setName("Gihan").setAge(24).getEmployee();
		System.out.println(emp);

	}

}
