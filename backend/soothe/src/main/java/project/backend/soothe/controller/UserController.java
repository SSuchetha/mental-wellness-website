package project.backend.soothe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.backend.soothe.model.User;
import project.backend.soothe.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/")
public class UserController 
{	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("user")
	public List<User> getAllUser()
	{
		return this.userRepository.findAll();
	}
	
	@GetMapping("user/{username}")
	public Optional<User> getUserByUsername(@PathVariable String username){
		return userRepository.findByUsername(username);
		
	}
	
	@PostMapping("user")
	public User createUser(@RequestBody User user) 
	{
		return this.userRepository.save(user);
	}
	
	@PostMapping("user/login")
	public Status loginUser(@RequestBody User user) 
	{
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }
}
