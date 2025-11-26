import React from "react";
import "./Community.scss";

export default function Community() {
  return (
    <div className="community">
      <div className="container">
        <div className="community-title">
          <h2>What the community is saying</h2>
        </div>

        <div className="community-flex">
          <div className="community-block">
            <picture>
              <source media="(max-width:1440px)" srcSet="/1440px/com-1.svg" />
              <source media="(max-width:1200px)" srcSet="/1200px/com-1.svg" />
              <source media="(max-width:1024px)" srcSet="/1024px/com-1.svg" />
              <source media="(max-width:768px)" srcSet="/768px/com-1.svg" />
              <source media="(max-width:375px)" srcSet="/768px/com-1.svg" />
              <img src="/1920px/com-1.svg" alt="" />
            </picture>
            <br />
            <picture className="com-hiden">
              <source media="(max-width:1440px)" srcSet="/1440px/com-2.svg" />
              <source media="(max-width:1200px)" srcSet="/1200px/com-2.svg" />
              <source media="(max-width:1024px)" srcSet="/1024px/com-2.svg" />
              <source media="(max-width:768px)" srcSet="/768px/com-2.svg" />
              <img src="/1920px/com-2.svg" alt="" />
            </picture>
          </div>

          <div className="community-block ">
            <picture className="com-2-pic com-hiden">
              <source media="(max-width:1440px)" srcSet="/1440px/com-3.svg" />
              <source media="(max-width:1200px)" srcSet="/1200px/com-3.svg" />
              <source media="(max-width:1024px)" srcSet="/1024px/com-3.svg" />
              <source media="(max-width:768px)" srcSet="/768px/com-3.svg" />
              <img src="/1920px/com-3.svg" alt="" />
            </picture>
            <br />
            <picture className="com-hiden">
              <source media="(max-width:1440px)" srcSet="/1440px/com-4.svg" />
              <source media="(max-width:1200px)" srcSet="/1200px/com-4.svg" />
              <source media="(max-width:1024px)" srcSet="/1024px/com-4.svg" />
              <source media="(max-width:768px)" srcSet="/768px/com-4.svg" />
              <img src="/1920px/com-4.svg" alt="" />
            </picture>
          </div>

          {/* 3 */}
          <div className="community-block com-last">
            <picture className="qwerty com-hiden">
              <source media="(max-width:1440px)" srcSet="/1440px/com-5.svg" />
              <source media="(max-width:1200px)" srcSet="/1200px/com-5.svg" />
              <source media="(max-width:1024px)" srcSet="/1024px/com-5.svg" />
              <source media="(max-width:768px)" srcSet="/768px/com-5.svg" />
              <source media="(max-width:375px)" srcSet="/768px/com-5.svg" />
              <img src="/1920px/com-5.svg" alt="" />
            </picture>
            <br />
            <picture className="com-hiden com-last-pic ">
              <source media="(max-width:1440px)" srcSet="/1440px/com-6.svg" />
              <source media="(max-width:1200px)" srcSet="/1200px/com-6.svg" />
              <source media="(max-width:1024px)" srcSet="/1024px/com-6.svg" />
              <source media="(max-width:768px)" srcSet="/768px/com-6.svg" />
              <img src="/1920px/com-6.svg" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}