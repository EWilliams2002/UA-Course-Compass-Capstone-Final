from selenium import webdriver 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome()

engangement=["ESOC480","ISTA498"]

engange = []

##### ENGAGMENT ####

##ESOC 480
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ESOC480" 
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

engange.append([name.text,desc.text,unit.text])

##ISTA 498
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA498"
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

engange.append([name.text,desc.text,unit.text])


##Save data to txt files
eng_courses_file = open("eng_courses.txt", "w")
for eng_info in engange:
    eng_courses_file.write(eng_info[0] + " : " + eng_info[1] + " : " + eng_info[2] + "\n")
eng_courses_file.close()