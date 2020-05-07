import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "@emotion/styled";
import { colors } from "../tokens";

const NewsletterForm = styled.form`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const EmailInput = styled.input`
  font-size: 20px;
  padding: 14px 10px;
  margin: 10px;
  border-radius: 3px;
  background: ${colors.gray100};
  border: none;
`;

const SubmitButton = styled.button`
  border-radius: 3px;
  background: ${colors.orange800};
  color: ${colors.gray100};
  border: none;
  padding: 14px 14px;
  font-size: 18px;
  margin: 10px 2px;

  :hover {
    background: ${colors.orange500};
  }
`;

const SIGNUP_REDIRECT = "https://aengus.substack.com";

export default class Newsletter extends React.Component {
  state = {
    email: null,
  };

  _handleChange = (e) => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    });
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`);

        if (result !== "success") {
          throw msg;
        }
        window.location.href = SIGNUP_REDIRECT;
      })
      .catch((err) => {
        console.log("err", err);
        alert(err);
      });
  };

  render() {
    return (
      <NewsletterForm onSubmit={this._handleSubmit}>
        <EmailInput
          type="text"
          onChange={this._handleChange}
          placeholder="Email..."
          name="email"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </NewsletterForm>
    );
  }
}
