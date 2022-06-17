package project.backend.soothe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.backend.soothe.model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message,Integer>{
	
}
