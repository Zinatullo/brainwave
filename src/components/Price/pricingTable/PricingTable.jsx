import React from "react";
import "./PricingTable.scss";

const features = [
  { name: "Custom AI chatbot", basic: true, premium: true, enterprise: true },
  { name: "Live support", basic: false, premium: "Email", enterprise: "1-1 support" },
  { name: "Integrations", basic: true, premium: true, enterprise: true },
  { name: "Advanced analytics", basic: true, premium: true, enterprise: true },
  { name: "Dedicated account manager", basic: true, premium: false, enterprise: true },
  { name: "Enhanced security", basic: true, premium: true, enterprise: true },
  { name: "Customized training", basic: false, premium: true, enterprise: true },
  { name: "Multi-agent support", basic: false, premium: false, enterprise: true },
  { name: "Advanced integrations", basic: false, premium: false, enterprise: true },
  { name: "Dedicated server", basic: false, premium: false, enterprise: true },
  { name: "White-labeling", basic: false, premium: false, enterprise: true },
  { name: "Customizable branding", basic: false, premium: false, enterprise: true },
];

export default function PricingTable() {
  const cell = (value) => {
    if (value === true) return <img src="/other/Check icon.svg" alt="check" className="check-icon" />;
    if (value === false) return <span className="empty-cell"> </span>;
    return <span className="text-value">{value}</span>;
  };

  return (
    <>
          <div className="pay-nav">
        <div className="pay-nav-title">
            <h4>Helping people create beautiful content at</h4> <img src="/arrow.svg" alt="" />
        </div>
        <div className="pay-nav-cards">
<div className="pay-nav-card">
    <img src="/fusion.svg" alt="" /><h5>fusion</h5>
</div>
<div className="pay-nav-card">
    <img src="/fusion.svg" alt="" /><h5>fusion</h5>
</div>
<div className="pay-nav-card">
    <img src="/fusion.svg" alt="" /><h5>fusion</h5>
</div>
<div className="pay-nav-card none-2">
    <img src="/fusion.svg" alt="" /><h5>fusion</h5>
</div>
<div className="pay-nav-card none-1">
    <img src="/fusion.svg" alt="" /><h5>fusion</h5>
</div>
        </div>
      </div>
    <div className="pricing-table container">
      <h2>Compare plans & features</h2>
      <table>
        <thead>
          <tr>
            <th className="feature">Features</th>
            <th className="basic-table">Basic</th>
            <th className="premium-table hide-mobile">Premium</th>
            <th className="enterprise-table hide-mobile">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((item, i) => (
            <tr key={i}>
              <td className="feature">{item.name}</td>
              <td>{cell(item.basic)}</td>
              <td className="hide-mobile">{cell(item.premium)}</td>
              <td className="hide-mobile">{cell(item.enterprise)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>

  );
}