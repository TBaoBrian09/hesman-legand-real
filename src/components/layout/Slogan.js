import React from "react";
import styled from "styled-components";

const SloganStyles = styled.section`
  .slogan {
    display: flex;
    gap: 20px;
    position: relative;
    width: 100%;
    height: 900px;
    .wrap {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      position: relative;
    }

    .right {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
    }

    .left {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
    }

    .title {
      /* display: flex;
      height: 100%;
      align-items: center;
      justify-content: center; */

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .mission1 {
        margin-bottom: 20px;
        h2 {
          color: var(--e-global-color-astglobalcolor8);
          font-family: "Chakra Petch", Sans-serif;
          font-size: 90px;
          font-weight: 700;
          line-height: 56px;
          margin-bottom: 20px;
        }
      }

      .mission2 {
        margin-bottom: 20px;
        h2 {
          color: var(--e-global-color-d1a5768);
          font-family: "Jura", Sans-serif;
          font-size: 44px;
          font-weight: 700;
          line-height: 66px;
          text-align: center;
        }
      }

      .mission3 {
        margin-bottom: 20px;
        h2 {
          color: var(--e-global-color-text);
          font-family: "Jura", Sans-serif;
          font-size: 44px;
          font-weight: 700;
          line-height: 66px;
        }
      }

      .mission4 {
        margin-bottom: 20px;
        h2 {
          color: var(--e-global-color-text);
          font-family: "Jura", Sans-serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 39px;
          text-align: center;
        }
      }
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 900px;
      width: 100%;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Slogan = () => {
  return (
    <SloganStyles>
      <div className="slogan">
        <div className="right">
          <div className="wrap">
            <div className="title">
              <div>
                <div className="mission1">
                  <h2>Sứ mệnh</h2>
                </div>
                <div className="mission2">
                  <h2>TIÊN PHONG</h2>
                </div>
                <div className="mission3">
                  <h2>CHO CÁC DỰ ÁN</h2>
                </div>
                <div className="mission4">
                  <h2>
                    TRONG NƯỚC, ĐƯA CÁC TÁC PHẨM
                    <br />
                    NGHỆ THUẬT VIỆT RA THỊ TRƯỜNG QUỐC TẾ
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Frame.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="left">
          <div className="wrap">
            <div className="title">
              <div>
                <div className="mission1">
                  <h2>Tầm nhìn</h2>
                </div>

                <div className="mission3">
                  <h2>ĐƯA HESMAN LEGAND</h2>
                </div>

                <div className="mission2">
                  <h2>
                    thành dự án NFT đầu tiên <br /> PHÓNG TÁC THÀNH TRUYỆN TRANH
                  </h2>
                </div>

                <div className="mission3">
                  <h2>Việt Nam</h2>
                </div>
              </div>
            </div>

            <div className="bg">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Frame.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </SloganStyles>
  );
};

export default Slogan;