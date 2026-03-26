from email.mime.multipart import MIMEMultipart
import smtplib
from email.mime.text import MIMEText
from flask import Flask, request, jsonify

app = Flask(__name__)

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
        result = "Email sent successfully!"
        return result

    except smtplib.SMTPAuthenticationError:
        print("Authentication failed. Check your email and password.")
    except Exception as e:
        print(f"Error sending email: {e}")
@app.route('/call-function', methods=['POST'])
def call_function():
    data = request.json
    result = SendMsg(
        sender_password="yolxglwpllhmzxpa",
        mailAdress=data['mailAdress'],
        button_text="Click Here",
        button_url="http://serveurnsiphp.local/eleves/mathis/mainHtml.html"
    )
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
