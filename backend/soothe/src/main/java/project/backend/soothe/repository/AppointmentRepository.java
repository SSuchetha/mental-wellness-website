package project.backend.soothe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.backend.soothe.model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,String>{
	Optional<Appointment> findByDate(String date);
	boolean existsByDate(String date);
}
