"use client";

import React, { useEffect, useState } from "react";
import "./footer.css";
import { Divider } from "@/components/ui";
import { metaMuseLinks } from "@/components/staticData/mettaMuse";
import { quickLinks } from "@/components/staticData/quickLinks";
import { socialMediaIcons } from "@/components/staticData/socialMediaIcons";
import { acceptedCards } from "@/components/staticData/acceptedCards";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const [showMettaMuseContent, setShowMettaMuseContent] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 600) {
        setShowMettaMuseContent(true);
        setShowQuickLinks(true);
        setShowSocialMediaIcons(true);
      }
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <footer>
      {/* Footer Upper Section */}
      <div className="footer_upper_container">
        <div className="first_to_know_section">
          <h3>Be the first to know</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            debitis distinctio quo esse nobis. Laborum, consectetur accusantium
            id tempore maxime consequatur! Quam excepturi quaerat cupiditate
            ipsum ea esse. A, fugit.
          </p>
          <div className="subscribe_container">
            <input
              className="subs_email"
              type="text"
              placeholder="Enter your e-mail..."
            />
            <button className="subs_btn">Subscribe</button>
          </div>
        </div>

        <div className="footer_divider">
          <Divider />
        </div>

        <div className="call_currency_section">
          <div className="call_us_container">
            <h3>Call us</h3>
            <div className="contact_details">
              <p>+44 221 133 5360</p>
              <div className="dot2"></div>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>

          <div className="footer_divider">
            <Divider />
          </div>

          <div className="currency_container">
            <h3>Currency</h3>
            <div className="usa_flag">
              <img
                src="/Flag.png"
                width={20}
                height={20}
                style={{ borderRadius: "50%" }}
                alt="USA Flag"
              />
              <div className="dot"></div>
              <span>USD</span>
            </div>
          </div>
          <p className="transaction_info">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: 2,
          backgroundColor: "white",
          marginBottom: 20,
        }}
      ></div>

      {/* Footer Lower Section */}
      <div className="footer_lower_container">
        {/* metta muse section */}
        <div className="metta_muse_sec list_style">
          <div
            className="arrow_down"
            onClick={() => {
              if (windowSize > 600) return;
              setShowMettaMuseContent(!showMettaMuseContent);
            }}
          >
            <h3>metta muse</h3>
            {showMettaMuseContent ? (
              <SlArrowUp className="arrow_down_icon" />
            ) : (
              <SlArrowDown className="arrow_down_icon" />
            )}
          </div>

          {showMettaMuseContent && (
            <ul>
              {metaMuseLinks.map((item) => (
                <li className="metta_muse_link link_style" key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="footer_divider">
          <Divider />
        </div>
        {/* Quick links section */}
        <div className="quick_links list_style">
          <div
            className="arrow_down"
            onClick={() => {
              if (windowSize > 600) return;
              setShowQuickLinks(!showQuickLinks);
            }}
          >
            <h3>Quick Links</h3>
            {showQuickLinks ? (
              <SlArrowUp className="arrow_down_icon" />
            ) : (
              <SlArrowDown className="arrow_down_icon" />
            )}
          </div>

          {showQuickLinks && (
            <ul>
              {quickLinks.map((item) => (
                <li className="link_style" key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="footer_divider">
          <Divider />
        </div>
        {/* Follow us and Metta muse Accepts Section */}
        <div className="follow_cards_sec">
          {/* Follow us section */}
          <div className="follow_us list_style">
            <div
              className="arrow_down"
              onClick={() => {
                if (windowSize > 600) return;
                setShowSocialMediaIcons(!showSocialMediaIcons);
              }}
            >
              <h3>Follow us</h3>
              {showSocialMediaIcons ? (
                <SlArrowUp className="arrow_down_icon" />
              ) : (
                <SlArrowDown className="arrow_down_icon" />
              )}
            </div>

            {showSocialMediaIcons && (
              <ul className="social_media_icons">
                {socialMediaIcons.map((item) => (
                  <li key={item.title}>
                    <a style={{ color: "white" }} href={item.link}>
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="footer_divider">
            <Divider />
          </div>
          {/* Metta muse Accepts Section */}
          <div className="list_style">
            <h3>metta muse ACCEPTS</h3>
            <ul className="accepted_cards">
              {acceptedCards.map((item) => (
                <li className="accepted_card" key={item.title}>
                  <a style={{ color: "white" }} href={item.link}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <p style={{ textAlign: "center", marginTop: 20 }}>
        Copyright &copy; 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
