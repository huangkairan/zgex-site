import imgHuman1 from "./assets/human.png";
import imgHuman2 from "./assets/human-2.png";
import logo from "./assets/logo.png";
import "./App.css";
import { useState } from "react";
import clsx from "clsx";

const cards = [
  {
    title: "AI视频",
    subTitle: "让你的创意动起来",
    btnText: "视频生成",
    link: "https://video.shengjiai.com/#/user/login",
  },
  {
    title: "智能客服",
    subTitle: "随时在线 贴心相伴",
    btnText: "添加客服",
    link: "https://crm.shengjiai.com/",
  },
] as const;

const buttons = [
  {
    title: "数智人",
    key: "human",
    subTitle: "告别高成本、长时间的视频制作流程 助您快速打造爆款视频",
    subTitles: [
      "高度逼真的形象，表情动作自然流畅",
      "高效便捷的创作流程，快速生产视频脚本和数字人真人视频",
      "音频输出支持多语言与多音色",
      "降低制作成本、人力成本、时间成本",
      "高性价比的长期使用、可重复利用性、更新与维护成本低",
    ],
    img: imgHuman1,
  },
  {
    title: "个微智能客服",
    key: "service",
    subTitle: "优化美业服务流程，降低运营成本",
    subTitles: [
      "通过后台管理多个账户进行私聊、群聊、朋友圈及其评论、视频号等",
      "定时自动操作自动加好友、发送朋友圈视频号，回复群聊私聊内容",
      "结合AI智能体，自动私聊，筛选出高意向客户，自动打标",
      "聊天记录监控，自动统计分析，AI私聊质检",
      "使用RPA技术，安全防封号",
    ],
    img: imgHuman2,
  },
] as const;

function App() {
  const [active, setActive] = useState<"human" | "service">("human");

  const current = buttons.find((i) => i.key === active);
  return (
    <div className="wrapper">
      <header>
        <img src={logo} alt="logo" />
        <span>逐光而行</span>
      </header>

      <div className="page1">
        <div className="main">
          <div className="titles">
            <div>
              <span style={{ color: "#ED58B0" }}>美业</span>新纪元
            </div>
            <div>AI 与数智人共舞</div>
            <div>探索美业无限可能</div>
          </div>
          <div className="line" />

          <div className="cards">
            {cards.map((card) => (
              <div className="card" key={card.title}>
                <div className="title">{card.title}</div>
                <div className="sub-title">{card.subTitle}</div>
                <div
                  className="button"
                  onClick={() => {
                    window.open(card.link, "_blank");
                  }}
                >
                  {card.btnText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page2">
        <div className="main">
          <img src={current?.img} alt="" />
          <div className="card">
            <div className="title">{current?.subTitle}</div>
            <ul>
              {current?.subTitles.map((i) => (
                <li key={i}>-{i}</li>
              ))}
            </ul>
          </div>
          <div className="buttons">
            {buttons.map((i) => (
              <div
                key={i.key}
                className={clsx("button", { active: i.key === active })}
                onMouseEnter={() => setActive(i.key)}
              >
                {i.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer />
    </div>
  );
}

export default App;
