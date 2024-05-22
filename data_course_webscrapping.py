from selenium import webdriver 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome()

emphasis_datascience= ["ESOC 414","ISTA311","ISTA320","ISTA321","ISTA322","ISTA331","ISTA350","ISTA355","ISTA410","ISTA421","ISTA429","ISTA431","ISTA439","ISTA450","ISTA455","ISTA456","ISTA457","LIS470"]

data_science = []

###### DATA SCIENCE EMPHASIS COURSES

##ESOC 414
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ESOC414"
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 311
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA311"
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 320
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA320"
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 321
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA321"
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 322
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+"ISTA322"
driver.implicitly_wait(7)
driver.get(courses)

#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 331
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA331"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 350
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA350"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 355
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA355"
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 410
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA410"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 421
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA421"
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

data_science.append([name.text,desc.text,unit.text])

##ISTA 429
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA429"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 431
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA431"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])


##ISTA 439
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA439"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 450
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA450"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 455
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA455"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 456
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA456"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##ISTA 457
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "ISTA457"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])

##LIS 470
courses =  "https://catalog.arizona.edu/courses?page=1&cq="+ "LIS470"
driver.implicitly_wait(7)
driver.get(courses)
    
#Pressing the course button
course_btn_path = ' //*[@id="courses-list"]/div/div[2]/div/button'
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
    
data_science.append([name.text,desc.text,unit.text])


##Saving data to txt files
data_courses_file = open("data_courses.txt", "w")
for data_info in data_science:
    data_courses_file.write(data_info[0] + " : " + data_info[1] + " : " + data_info[2] + "\n")
data_courses_file.close()