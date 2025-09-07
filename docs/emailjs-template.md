# EmailJS Template Example

When setting up your template in EmailJS, you can use the following HTML format as a starting point:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio Contact Form</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    <h3>Message:</h3>
    <p>{{message}}</p>
    <hr>
    <p><small>This email was sent from your portfolio contact form.</small></p>
</body>
</html>
```

## Variables

The contact form in this portfolio sends the following variables to EmailJS:

- `{{from_name}}`: The sender's name
- `{{from_email}}`: The sender's email address
- `{{subject}}`: The subject of the message
- `{{message}}`: The message content

Make sure your EmailJS template includes these variables exactly as shown above for the form to work correctly.
