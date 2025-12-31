# Web-Security-Vault
A collection of security best practices and checklists for Frontend development AWS Cloud Security
## Web-Security Checklist
### Frontend (Client-side) Security
*[] **Input Validatiion:** Ensure all user inputs are sanitized to prevent Cross-Site Scripting(XSS).
*[] **Secure Storage:** Avoid storing sensitive data (API keys, passwords) in 'local storage'.
*[] **Content Security Policy(CSP):** Implement headers to restrict which scripts can run on your site.

### AWS Cloud Security
*[] **IAM Least Priviledge:** Ensure users have only the minimum permission needed.
*[] **Multi-Factor Authentication(MFA):** Enable MFA for all administrative accounts.
*[] **S3 Bucket Privacy:** Verify that public access is blocked for sensitive data storage.
 
### Responsible AI and Ethics
*[] **Data Privacy:** Ensure user data used in AI prompts is anonymized
*[] **Bias Audit:** Regularly check AI outputs for unfair patterns or biases 
