const express = require(`express`);
const nodemailer = require(`nodemailer`);
const cors = require(`cors`);

const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());

app.use(`/`, router);

const contactEmail = nodemailer.createTransport({
  service: `gmail`,
  auth: {
    user: `ndubest56@gmail.com`,
    pass: ``,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Ready to Send`);
  }
});

router.post(`/contact`, (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: `ndubest56@gmail.com`,
    subject: `Contact from submission - Portfolio`,
    html: `<p>Name: ${name}<p>
           <p>Name: ${email}<p>
           <p>Name: ${message}<p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json();
    } else {
      res.json({ code: 200, status: `Message Sent` });
    }
  });
});

app.listen(5000, () => console.log(`Server is running at port 5000`));
