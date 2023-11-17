import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <MDBFooter bgColor="black" className="text-center text-lg-start text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#3b5998",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#55acee",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#dd4b39",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#ac2bac",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#0082ca",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#333333",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Ambiance Space
              </h6>
              <p>
                At Ambiance Space, we take pride in being your premier
                destination for exquisite interior design. Our curated services,
                including luxury home staging and personalized design, are
                crafted to elevate your living experience.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">USEFUL LINKS</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Shop
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">SUPPORT</h6>
              <p>
                <a href="#!" className="text-reset">
                Help
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Customer Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms and conditions
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Mumbai, Maharashtra, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ascs25835@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9026589058
              </p>
            </MDBCol>
          </MDBRow>
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto" className="mb-4 mb-md-0">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" size="12" className="mb-4 mb-md-0">
                <MDBInput
                  type="text"
                  id="form5Example2"
                  label="Email address"
                />
              </MDBCol>

              <MDBCol size="auto" className="mb-4 mb-md-0">
                <MDBBtn>Subscribe</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{
          backgroundColor: "#333333",
        }}
      >
        &copy; {new Date().getFullYear()}{" "}
         Copyright:{" "}
        <a className="text-reset fw-bold" href="#">
          Ambiance Space
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
