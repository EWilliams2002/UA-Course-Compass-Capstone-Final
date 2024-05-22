from selenium import webdriver 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome()

emphasis_interactive_immersive_technologies = ["GAME425", "GAME451","ISTA303","ISTA320", "ISTA330", "ISTA350", "ISTA403", "ISTA416", "ISTA424", "ISTA495"]

immersive_tech = []

#### INTERACTIVE AND IMMERSIVE TECHNOLOGIES EMPHASIS

##GAME 425
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"GAME425"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)
immersive_tech.append([name.text,desc.text,unit.text]) 

##GAME 451
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"GAME451"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 303
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA303"
driver.implicitly_wait(7)
driver.get(courses)
      
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 320
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA320"
driver.implicitly_wait(12)
driver.get(courses)

#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 330

courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA330"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 350
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA350"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 403
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA403"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 416
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA416"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 424
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA424"
driver.implicitly_wait(7)
driver.get(courses)
    
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##ISTA 495
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA495"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = '//*[@id="courses-list"]/div/div[2]/div/button'
course_btn = driver.find_element(By.XPATH, course_btn_path)
course_btn.click()

#Getting the course name, printing it (to make sure it works), appending to the respective list  
course_name= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/h1')
#The for loop will print the name of the course name.
for name in course_name:
    print(name.text)
    
#Getting the course description, printing it (to make sure it works), appending to the respective list  
course_desc= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[1]/div/div/div')
#The for loop will print the name of the course name.
for desc in course_desc:
    print(desc.text)

#Getting the course unit, printing it (to make sure it works), appending to the respective list  
course_unit= driver.find_elements(By.XPATH,'//*[@id="main-content"]/main/aside[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div')
#The for loop will print the name of the course name.
for unit in course_unit:
    print(unit.text)

immersive_tech.append([name.text,desc.text,unit.text])

##Saving data to txt files
immersive_courses_file = open("immersive_courses.txt", "w")
for immersive_info in immersive_tech:
    immersive_courses_file.write(immersive_info[0] + " : " + immersive_info[1] + " : " + immersive_info[2] + "\n")
immersive_courses_file.close()