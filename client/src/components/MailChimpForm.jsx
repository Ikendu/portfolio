import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

export default function MailChimpForm() {
  const postUrl = import.meta.env.MAILCHIMP_URL;
  console.log(postUrl);

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <>
            <Newsletter
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          </>
        )}
      />
    </>
  );
}
