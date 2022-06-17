package project.backend.soothe.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import project.backend.soothe.exception.ResourceNotFound;
import project.backend.soothe.model.Appointment;
import project.backend.soothe.repository.AppointmentRepository;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/api/app/")
public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	//@CrossOrigin(origins = "http://localhost:8080")
	@PostMapping("appointments")
	public Appointment bookAppointment(@RequestBody Appointment appointment) {
		return this.appointmentRepository.save(appointment);
	}
	
}