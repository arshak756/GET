import {useForm} from "react-hook-form";
import axios from "axios";
import {
    Container, Row, Col, Form, Button, Alert, FloatingLabel,
} from "react-bootstrap";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {useState} from "react";

export default function ContactUs() {
    const {
        register, handleSubmit, reset, formState: {errors, isSubmitting},
    } = useForm();

    const [submitted, setSubmitted] = useState(false);

    const [alert, setAlert] = useState(null); // { type: "success" | "danger", message: "" }

    const onSubmit = async (data) => {
        try {
            // const res = await axios.post("http://localhost:5000/api/contact", data);

            setAlert({type: "success", message: "✅ Thank you! We’ll get back to you shortly."});
            reset();
        } catch (err) {
            setAlert({type: "danger", message: "❌ Something went wrong. Please try again later."});
        }
    };
    return (<section id="contact" className="py-5" style={{backgroundColor: "#f8f9fa"}}>
        <Container>
            {/* Page Heading */}
            <h2
                className="text-center fw-bold mb-4"
                style={{color: "#d9534f"}}
                data-aos="flip-down"
            >
                Contact Us
            </h2>

            {/* Show Alert ONLY after submit */}
            {alert && (
                <Alert
                    variant={alert.type}
                    className="text-center mt-3 rounded-pill"
                    dismissible
                    onClose={() => setAlert(null)}
                >
                    {alert.message}
                </Alert>
            )}

            <Container>
                {/* Contact Form */}
                <Row data-aos="fade-right">
                    <div className="bg-white p-4 p-md-5 shadow-lg rounded-4 h-100">
                        <h4 className="mb-3 fw-bold" style={{color: "#0d6efd"}}>
                            Send Us a Message
                        </h4>

                        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <FloatingLabel controlId="floatingName" label="Your Name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    {...register("name", {required: "Name is required."})}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    {...register("email", {
                                        required: "Email is required.", pattern: {
                                            value: /\S+@\S+\.\S+/, message: "Email is invalid.",
                                        },
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingNumber" label="Contact Number" className="mb-3">
                                <Form.Control
                                    type="tel"
                                    placeholder="Contact Number"
                                    {...register("number", {
                                        required: "Contact number is required.", pattern: {
                                            value: /^[0-9]{10}$/, message: "Must be a 10-digit number.",
                                        },
                                    })}
                                    isInvalid={!!errors.number}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.number?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingMessage" label="Your Message" className="mb-4">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Your Message"
                                    style={{height: "120px"}}
                                    {...register("message", {required: "Message is required."})}
                                    isInvalid={!!errors.message}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.message?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <div className="">
                                <Button
                                    type="submit"
                                    variant="danger"
                                    className="rounded-pill px-4 shadow"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Row>

                {/* Contact Info */}
                <Row
                    data-aos="fade-left"
                    className="bg-white p-4 p-md-5 shadow-lg rounded-4 h-100 mt-3"
                >
                    <Col md={6}>
                        <h4 className="mb-3 fw-bold" style={{ color: "#0d6efd" }}>
                            Get in Touch
                        </h4>

                        <div className="mb-3 d-flex align-items-start">
                            <FaPhoneAlt className="me-3 text-success fs-5" />
                            <span>
        <strong>Phone:</strong>{" "}
                                <a href="tel:+918940935333" className="text-dark">
          +91 89409 35333
        </a>
      </span>
                        </div>

                        <div className="mb-3 d-flex align-items-start">
                            <FaEnvelope className="me-3 text-success fs-5" />
                            <span>
        <strong>Email:</strong>{" "}
                                <a href="mailto:guruenvirotech@gmail.com" className="text-dark">
          guruenvirotech@gmail.com
        </a>
      </span>
                        </div>

                        <div className="mb-3 d-flex align-items-start">
                            <FaMapMarkerAlt className="me-3 text-success fs-5" />
                            <span>
        <strong>Address:</strong> #1127, 19 Road, Nanjai Uthukuli, <br />
        Erode – 638 104, Tamil Nadu, India.
      </span>
                        </div>
                    </Col>

                    <Col md={6}>
                        {/* Map */}
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.51251533188935!2d77.7450617794462!3d11.320069514974717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96586df763ad9%3A0xef92495234de44b5!2s19th%20Rd%2C%20Sakthi%20Nagar%2C%20Erode%2C%20Tamil%20Nadu%20638002!5e0!3m2!1sen!2sin!4v1755340467906!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />



                    </Col>
                </Row>

            </Container>

        </Container>
    </section>);
}
