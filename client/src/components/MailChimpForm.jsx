import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function MailChimpForm() {
  const postUrl = import.meta.env.MAILCHIMP_URL;
  console.log(postUrl);

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => <></>}
      />
    </>
  );
}
