package project.backend.soothe.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends Exception{
	
	private static final long seriolVersionUID=1L;
	
	public ResourceNotFound(String message) {
		super(message);
	}
}
