package project.backend.soothe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.backend.soothe.model.Progress;
import project.backend.soothe.repository.ProgressRepository;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/api/progress/")
public class ProgressController {
	
	@Autowired
	private ProgressRepository progressRepository;
	
	@PostMapping("add")
	public Progress createProgress(@RequestBody Progress progress) 
	{
		return this.progressRepository.save(progress);
	}
	
	@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
	@GetMapping("getAllProgress")
	public List<Progress> getProgress(){
		return progressRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
	@GetMapping("get")
	public Optional<List<Progress>> getByUsername(@PathVariable String username){
		return progressRepository.findAllByUsername(username);
	}
}
