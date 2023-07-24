"use client";
import React, { useEffect } from "react";
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Container from "@/app/components/layout/container/Container";
import Separator from "@/app/components/ui/separator/Separator";

const page = () => {
  return (
    <div>
      <Container>
        <Tabs
          className={"contactstabs__container"}
          selectedTabClassName="contactstab--select"
        >
          <TabList className={"contactstabs"}>
            <Tab className={"contactstab"}>How does courier delivery work?</Tab>
            <Tab className={"contactstab"}>
              How to get the goods from the pickup point?
            </Tab>
            <Tab className={"contactstab"}>What are the payment methods?</Tab>
            <Tab className={"contactstab"}>
              How to find out the status of the ordered product?
            </Tab>
          </TabList>

          <TabPanel className={"contactstab__content_wraper"}>
            <div className={"contactstab__content"}>
              <Separator type="VERTICAL" cn="contactstabSep" />
              <h2>
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website.
                <br />
                <br /> The cost of courier delivery is from UAH 59 to UAH 150,
                depending on the location. The exact cost of delivery is
                calculated when placing an order. Be careful and correctly
                indicate the city of delivery. When the order is delivered by
                the Rozetka courier, you have the option to pay for the order in
                cash or by credit card. Payment by card upon receipt has certain
                restrictions.
                <br />
                <br />
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website. The
                cost of courier delivery is from UAH 59 to UAH 150, depending on
                the location.
                <br />
                <br />
                The exact cost of delivery is calculated when placing an order.
                Be careful and correctly indicate the city of delivery. When the
                order is delivered by the Rozetka courier, you have the option
                to pay for the order in cash or by credit card.
              </h2>
            </div>
          </TabPanel>
          <TabPanel className={"contactstab__content_wraper"}>
            <div className={"contactstab__content"}>
              <Separator type="VERTICAL" cn="contactstabSep" />
              <h2>
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website.
                <br />
                <br /> The cost of courier delivery is from UAH 59 to UAH 150,
                depending on the location. The exact cost of delivery is
                calculated when placing an order. Be careful and correctly
                indicate the city of delivery. When the order is delivered by
                the Rozetka courier, you have the option to pay for the order in
                cash or by credit card. Payment by card upon receipt has certain
                restrictions.
                <br />
                <br />
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions.
              </h2>
            </div>
          </TabPanel>
          <TabPanel className={"contactstab__content_wraper"}>
            <div className={"contactstab__content"}>
              <Separator type="VERTICAL" cn="contactstabSep" />
              <h2>
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website.
                <br />
                <br /> The cost of courier delivery is from UAH 59 to UAH 150,
                depending on the location. The exact cost of delivery is
                calculated when placing an order. Be careful and correctly
                indicate the city of delivery. When the order is delivered by
                the Rozetka courier, you have the option to pay for the order in
                cash or by credit card. Payment by card upon receipt has certain
                restrictions.
                <br />
                <br />
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website. The
                cost of courier delivery is from UAH 59 to UAH 150, depending on
                the location.
                <br />
                <br />
                The exact cost of delivery is calculated when placing an order.
                Be careful and correctly indicate the city of delivery. When the
                order is delivered by the Rozetka courier, you have the option
                to pay for the order in cash or by credit card. Payment by card
                upon receipt has certain restrictions.
              </h2>
            </div>
          </TabPanel>
          <TabPanel className={"contactstab__content_wraper"}>
            <div className={"contactstab__content"}>
              <Separator type="VERTICAL" cn="contactstabSep" />
              <h2>
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website.
                <br />
                <br /> The cost of courier delivery is from UAH 59 to UAH 150,
                depending on the location. The exact cost of delivery is
                calculated when placing an order. Be careful and correctly
                indicate the city of delivery. When the order is delivered by
                the Rozetka courier, you have the option to pay for the order in
                cash or by credit card. Payment by card upon receipt has certain
                restrictions.
                <br />
                <br />
                You can order delivery by Rozetka courier. The service is
                available only in some cities and regions. Information about the
                possibility of Rozetka courier delivery is indicated on the
                product page (don't forget to specify the locality) or in the
                delivery block when confirming the order on the website. The
                cost of courier delivery is from UAH 59 to UAH 150, depending on
                the location.
                <br />
                <br />
                The exact cost of delivery is calculated when placing an order.
                Be careful and correctly indicate the city of delivery
              </h2>
            </div>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

export default page;
