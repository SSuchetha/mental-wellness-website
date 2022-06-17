package project.backend.soothe.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.backend.soothe.model.Message;
import project.backend.soothe.repository.MessageRepository;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/api/msg/")
public class MessageController {
	
	@Autowired
	private MessageRepository messageRepository;
	
	@GetMapping("message")
	public Optional<Message> getMessage() {
		int num=(int) (Math.random()*(11-1+1)+1);
		return this.messageRepository.findById(num);
		
	}
	
	@PostMapping("message")
	public Message createMessage(@RequestBody Message message) {
		return this.messageRepository.save(message);
	}
	
}
