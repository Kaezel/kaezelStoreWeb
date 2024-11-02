import React from "react";
import { Heading } from "../common/Heading";
import { ArrowBackIosNew } from "@mui/icons-material";

export const ToS = () => {
  return (
    <>
      <section className="termsofservice">
        <div className="container">
          <div className="content" data-aos="zoom-in" data-aos-duration="1200">
            <div className="box" data-aos="zoom-out" data-aos-duration="1200">
              <div className="headbox">
                <button
                  className="primaryBtn"
                  onClick={() => (window.location.href = "/")}
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <ArrowBackIosNew />
                </button>
                <Heading title="Terms of Service" />
              </div>
              <ol data-aos="fade-down" data-aos-duration="1200">
                <li>
                  By using our services, you acknowledge that it may be against
                  the game’s Terms of Service.
                </li>
                <li>
                  For boosting services: If your account is banned during the
                  boost (which has not occurred in the past), we cannot
                  compensate unless it is directly due to our fault during our
                  service. Proof of such fault must be provided for compensation
                  eligibility.
                </li>
                <li>
                  Payment Policy
                  <ul>
                    <li>
                      Boosting: Full payment is required before the start of the
                      service. Once we receive your payment, we will begin
                      immediately.
                    </li>
                    <li>
                      Rerolling: Payment is due once your requested account is
                      fulfilled and prior to the account handover.
                    </li>
                  </ul>
                </li>
                <li>
                  Our team members (the players performing the services) are
                  located in Indonesia.
                </li>
                <li>
                  All services are performed manually, without the use of
                  illegal programs, hacks, bots, or any automation. This ensures
                  a safe and secure process. ^_^
                </li>
                <li>
                  By using our services, you agree to these Terms & Policies.
                  Since our founding in 2020, we have maintained a 100% ban-free
                  record due to our actions. We have also successfully completed
                  over 20 boosting services in games like Genshin Impact and
                  delivered more than 100 rerolled accounts across various
                  games.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
