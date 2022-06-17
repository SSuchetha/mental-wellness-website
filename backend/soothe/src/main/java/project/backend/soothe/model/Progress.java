package project.backend.soothe.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="progress")
public class Progress {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="date")
	private String date;
	
	@Column(name="day")
	private String day;
	
	@Column(name="mood")
	private String mood;
	
	@Column(name="sleep")
	private int sleep;
	
	@Column(name="quality")
	private String quality;
	
	@Column(name="diet")
	private String diet;
	
	@Column(name="water")
	private int water;
	
	@Column(name="med")
	private String med;

	public Progress() {
		super();
	}

	public Progress(String username, String date, String day, String mood, int sleep, String quality, String diet, int water, String med) {
		super();
		this.username = username;
		this.date = date;
		this.day=day;
		this.mood=mood;
		this.sleep=sleep;
		this.quality=quality;
		this.diet=diet;
		this.water=water;
		this.med=med;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getMood() {
		return mood;
	}

	public void setMood(String mood) {
		this.mood = mood;
	}

	public int getSleep() {
		return sleep;
	}

	public void setSleep(int sleep) {
		this.sleep = sleep;
	}

	public String getQuality() {
		return quality;
	}

	public void setQuality(String quality) {
		this.quality = quality;
	}

	public String getDiet() {
		return diet;
	}

	public void setDiet(String diet) {
		this.diet = diet;
	}

	public int getWater() {
		return water;
	}

	public void setWater(int water) {
		this.water = water;
	}

	public String getMed() {
		return med;
	}

	public void setMed(String med) {
		this.med = med;
	}
	
}
