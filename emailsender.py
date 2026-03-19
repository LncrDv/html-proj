from email.mime.multipart import MIMEMultipart
import smtplib
from email.mime.text import MIMEText
def SendMsg(mailAdress,button_url,button_text,sender_password):
    sender_email = "emailsender19.noreply@gmail.com"
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = "Authentification"
        msg["From"] = sender_email
        msg["To"] = mailAdress
        html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                    <h2 style="color: #333;">Hello!</h2>
                    <p>Click the button below to proceed:</p>
                    <a href="{button_url}" 
                       style="display: inline-block; padding: 12px 24px; font-size: 16px; 
                              color: white; background-color: #007BFF; text-decoration: none; 
                              border-radius: 5px;">
                        {button_text}
                    </a>
                    <p style="margin-top: 20px; font-size: 12px; color: #777;">
                        If the button doesn't work, copy and paste this link into your browser:<br>
                        <a href="{button_url}">{button_url}</a>
                    </p>
                </body>
            </html>
            """
        msg.attach(MIMEText(html_content, "html"))
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, mailAdress, msg.as_string())

        print("Email sent successfully!")

    except smtplib.SMTPAuthenticationError:
        print("Authentication failed. Check your email and password.")
    except Exception as e:
        print(f"Error sending email: {e}")
# à modifier pour accepter l'adresse qu'on veut
if __name__ == "__main__":
    SendMsg(
        sender_password="yolxglwpllhmzxpa",
        mailAdress="matop1850@gmail.com",
        button_text="Click Here",
        button_url="http://serveurnsiphp.local/eleves/mathis/mainHtml.html"
    )
