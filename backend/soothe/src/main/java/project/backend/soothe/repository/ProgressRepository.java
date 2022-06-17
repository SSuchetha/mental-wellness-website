package project.backend.soothe.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.backend.soothe.model.Progress;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long>{
	Boolean existsByUsername(String username);
	Optional<List<Progress>> findAllByUsername(String username);
}
