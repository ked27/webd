package com.example.demo;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DemoApplicationTests {

	 @LocalServerPort
	    private int port;
	    private WebDriver driver;
	    
	@Test
	void contextLoads() throws InterruptedException {
		  System.setProperty("webdriver.gecko.driver", "C:\\Users\\Naman_Kedia\\OneDrive - Dell Technologies\\Desktop\\Story\\selenium-web-driver\\geckodriver.exe");	
	      driver = new FirefoxDriver();	
	      driver.get("http://localhost:" + port);
	      WebElement link;
	      link = driver.findElement(By.id("here"));
	      link.click();
	      Thread.sleep(5000);
	      WebElement searchBox;
	      searchBox = driver.findElement(By.id("user"));
	      searchBox.sendKeys("user");
	      searchBox = driver.findElement(By.id("password"));
	      searchBox.sendKeys("password");
	      searchBox.submit();
	      Thread.sleep(5000);
	      driver.quit();
	}

}
