
public class EmployeeBuilder {

	private int id;
	private String name;
	private int age;
	private String position;
	
	public EmployeeBuilder setId(int id) {
		this.id = id;
		return this;
	}
	public EmployeeBuilder setName(String name) {
		this.name = name;
		return this;
	}
	public EmployeeBuilder setAge(int age) {
		this.age = age;
		return this;
	}
	public EmployeeBuilder setPosition(String position) {
		this.position = position;
		return this;
	}
	
	public Employee getEmployee() {
		return new Employee(id,name,age,position);
	}
}
