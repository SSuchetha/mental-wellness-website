package project.backend.soothe.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="messages")
public class Message {
	
	@Id
	@Column(name="msgid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer msgid;
	
	@Column(name="message")
	public String message;

	public Message() {
		super();
	}

	public Message(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
