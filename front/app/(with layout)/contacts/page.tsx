import React from "react";
import Container from "@/app/components/layout/container/Container";
import Separator from "@/app/components/ui/separator/Separator";
import "./style.scss";
import Input from "@/app/components/ui/input/Input";
import OriginButton from "@/app/components/ui/buttons/origin/OriginButton";

const formInfo = [
  { name: "Name", pl: "Name" },
  { name: "Contact phone number", pl: "+38" },
  { name: "Email", pl: "Email" },
];
const contactsInfo = [
  { name: "Office", value: "Kyiv, Pavla Tychyna Avenue, 9A" },
  { name: "Storage", value: "Kyiv, Pavla Tychyna Avenue, 9A" },
  { name: "Office hours", value: "Mon-Sun: from 8:00 a.m. to 10:00 p.m" },
  { name: "Our contact phone number", value: "+38(097) 278-55-55" },
  {
    name: "Application acceptance time",
    value: "Mon-Sun: from 8:00 a.m. to 10:00 p.m",
  },
  {
    name: "Acceptance of orders electronically on the site",
    value: "around the clock",
  },
  { name: "E-mail", value: "info@gmail.com" },
];

const page = () => {
  return (
    <div>
      <Container>
        <div className="contats">
          <div className="contats__info">
            <div className="contats__infoHeading">Shop of electronics</div>
            <Separator type="HORIZONTAL" />
            {contactsInfo.map((el) => (
              <div className="contats__infoItem">
                <div className="contats__name">{el.name}:</div>
                <div className="contats__value">{el.value}</div>
              </div>
            ))}
          </div>
          <div className="contats__form contatsform">
            <div className="contatsform__heading">Feedback form</div>
            <Separator type="HORIZONTAL" />
            {formInfo.map((el) => (
              <>
                <div className="contatsform__caption">{el.name} </div>
                <div className="contatsform__input">
                  <Input
                    styleType="input"
                    cn="contatsforminput"
                    placeholder={el.pl}
                  />
                </div>
              </>
            ))}
            <textarea
              className="contatsformTextArea"
              name="text area"
              placeholder="write your masage"
            />
            <Separator type="HORIZONTAL" />
            <div className="contats__form_bottom">
              <OriginButton cn="contatsFormInput">Send a message</OriginButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
