import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import schedule
import time
from datetime import datetime, timedelta, date
import sys


# Password: ISTA498CapstoneProject2024!!
# Email configuration
email_sender = 'uacoursecompass@gmail.com'
email_password = 'tmcj ovzh nuvk yquo'
smtp_server = 'smtp.gmail.com'
port = 587

# Email content
subject = 'Academic Deadline Reminder'
body_template = "Hello, just a reminder that {} is on {}. Please take necessary action if needed."

# Academic dates
academic_dates = {
    '08/26/2024':'First day of Fall classes and other activities',
    '09/01/2024':'Registration opens soon, stay updated with your specific day',
    '09/02/2024':'Last day for class additions and changes via UAccess',
    '09/08/2024':'Last day to drop without a W, and to change credit/audit status',
    '09/22/2024': 'Last day for department staff to add or drop',
    '11/03/2024': 'Last day to file for Grade Replacement Opportunity',
    '11/03/2024': 'Last day to withdraw, change to/from audit, or for instructors to drop students',
    '12/11/2024': 'Last day of class--no registration changes can be made after the last day of class',
    '12/13/2024': 'Final Exams begin'
}

def send_email(recipient, subject, body):
    message = MIMEMultipart()
    message['From'] = email_sender
    message['To'] = recipient
    message['Subject'] = subject

    message.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP(smtp_server, port)
    server.starttls()
    server.login(email_sender,email_password)
    text = message.as_string()
    print(email_sender)
    print(recipient)
    print(text)
    server.sendmail(email_sender, recipient, text)
    server.quit()

def organize_dates():
    dates_send = []
    message_send = "Hello UA Course Compass User, "+"\n"+"\n"+"Upcoming important dates: " +"\n"
    get_date = date.today().strftime('%m/%d/%Y')
    current_date = datetime.strptime(get_date, '%m/%d/%Y')
    for date_str in academic_dates:
        date_obj = datetime.strptime(date_str, '%m/%d/%Y')
        print(current_date)
        print(date_obj)
        if current_date < date_obj:
            dates_send.append(date_obj)
    for element in sorted(dates_send):
        str_date = element.strftime('%m/%d/%Y')
        message_send += str_date + ": "+academic_dates[str_date] + "\n"
    return message_send


def schedule_emails():
    for event, date_str in academic_dates.items():
        date_obj = datetime.strptime(date_str, '%m/%d/%Y')
        reminder_date = date_obj - timedelta(days=1)
        event_body = body_template.format(event, date_str)

        # Schedule the email
        schedule.every().day.at(reminder_date.strftime('23:37')).do(send_email, 
            recipient='stinnettr02@gmail.com', 
            subject=subject, 
            body=event_body)

        print(f"Scheduled an email for {event} on {reminder_date.strftime('%Y-%m-%d 23:37')}")


def main():
    message_str = organize_dates()
    email = sys.argv[1]
    send_email(email, 'Academic Deadline Reminder', message_str)
    print("Emails sent!")

if __name__ == "__main__":
    main()