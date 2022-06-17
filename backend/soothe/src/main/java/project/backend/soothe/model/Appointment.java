package project.backend.soothe.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="appointments",
	uniqueConstraints= {
		@UniqueConstraint(columnNames="date")
})
public class Appointment{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="date")
	private String date;
	
	@Column(name="drname")
	private String drname;
	
	@Column(name="slot")
	private String slot;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="phno")
	private long phno;
	
	@Column(name="hospital")
	private String hospital;
	
	public Appointment() {
		super();
	}

	public Appointment(String drname, String slot, String name, String email, long phno, String hospital, String date) {
		super();
		this.drname = drname;
		this.slot = slot;
		this.name = name;
		this.email = email;
		this.phno = phno;
		this.hospital = hospital;
		this.date = date;
	}

	public String getDrname() {
		return drname;
	}

	public void setDrname(String drname) {
		this.drname = drname;
	}

	public String getSlot() {
		return slot;
	}

	public void setSlot(String slot) {
		this.slot = slot;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhno() {
		return phno;
	}

	public void setPhno(long phno) {
		this.phno = phno;
	}

	public String getHospital() {
		return hospital;
	}

	public void setHospital(String hospital) {
		this.hospital = hospital;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
}