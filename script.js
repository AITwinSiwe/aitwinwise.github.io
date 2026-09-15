"use strict";
const navigation = document.querySelector(".site-nav");
const menuButton = document.querySelector(".nav-toggle");
function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "菜单";
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "收起" : "菜单";
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
document.querySelector("#year").textContent = String(new Date().getFullYear());

const products = {
  research: {
    title: "科研智能体",
    kicker: "RESEARCH AGENT",
    interest: "科研智能体",
    intro:
      "围绕课题组的真实工作，将项目、论文、文献知识与团队协作连接起来，让研究过程更有组织、知识积累更易复用。",
    features: [
      [
        "项目与团队协作",
        "围绕项目组织论文、任务与学术活动，支持不同协作角色的工作入口。",
      ],
      [
        "文献与知识网络",
        "连接文献阅读、批注与知识关联，支持从知识回到原始资料。",
      ],
      [
        "工具与工作流",
        "结合 AI 助手、文档协作和科学计算工具，辅助整理、分析与报告工作。",
      ],
      ["成果与报告", "整理研究过程与项目资料，辅助生成图表与报告。"],
    ],
    image: "assets/research-map-realistic-wide.webp",
    alt: "科研智能体功能图：机器人 Agent 连接项目与团队、文献与知识、工具与工作流、成果与报告",
    caption: "功能概念示意，非实际软件界面。点击配图可在新标签页查看高清原图。",
    note: "可交流课题组使用场景、产品演示与部署方案。具体接入模块与交付范围按需求确定。",
  },
  teaching: {
    title: "教学智能体",
    kicker: "EDUCATION AGENT",
    interest: "教学智能体",
    intro:
      "从教师的真实需求出发，连接课前准备、课堂讲授、实践训练与学习反馈，让专业知识进入可互动的教学过程。",
    features: [
      ["管理员", "课程与用户管理、内容审核发布、系统配置维护。"],
      ["教师", "课件与作业管理、课堂讲稿生成、批改与教学反馈。"],
      ["助教", "协助课件与作业管理、作业批改与答疑、上传检查与支持。"],
      ["学生", "课件学习与预习、在线编程与提交、AI 问答与学习反馈。"],
    ],
    image: "assets/teaching-map-realistic-wide.webp",
    alt: "教学智能体功能图：机器人 Agent 连接管理员、教师、助教与学生的工作",
    caption: "功能概念示意，非实际软件界面。点击配图可在新标签页查看高清原图。",
    note: "教师保留内容审核与正式评分的决定权。可交流课程接入、教学演示与部署方案。",
  },
};
const dialog = document.querySelector("#product-dialog");
const closeDialogButton = document.querySelector("#close-dialog");
let activeProduct = "research";
let dialogTrigger;
document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    activeProduct = button.dataset.product;
    const product = products[activeProduct];
    dialogTrigger = button;
    document.querySelector("#dialog-title").textContent = product.title;
    document.querySelector("#dialog-kicker").textContent = product.kicker;
    document.querySelector("#dialog-intro").textContent = product.intro;
    document.querySelector("#dialog-note").textContent = product.note;
    document.querySelector("#dialog-caption").textContent = product.caption;
    const picture = document.querySelector("#dialog-image");
    picture.src = product.image;
    picture.alt = product.alt;
    document.querySelector("#dialog-original").href = product.image;
    const features = document.querySelector("#dialog-features");
    features.replaceChildren();
    product.features.forEach(([title, description]) => {
      const section = document.createElement("section");
      const heading = document.createElement("h3");
      const paragraph = document.createElement("p");
      heading.textContent = title;
      paragraph.textContent = description;
      section.append(heading, paragraph);
      features.append(section);
    });
    dialog.showModal();
    document.body.classList.add("dialog-open");
    dialog.scrollTop = 0;
    closeDialogButton.focus();
  });
});
closeDialogButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  dialogTrigger?.focus({ preventScroll: true });
});
const interest = document.querySelector("#interest");
const form = document.querySelector("#inquiry-form");
const result = document.querySelector("#inquiry-result");
function setInterest(value) {
  interest.value = value;
  form.hidden = false;
  result.hidden = true;
}
document.querySelector("#dialog-contact").addEventListener("click", () => {
  setInterest(products[activeProduct].interest);
  dialog.close();
  requestAnimationFrame(() => interest.focus({ preventScroll: true }));
});
document
  .querySelectorAll("[data-interest]")
  .forEach((link) =>
    link.addEventListener("click", () => setInterest(link.dataset.interest)),
  );
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const scenario = document.querySelector("#scenario");
  if (!scenario.value.trim()) {
    scenario.setCustomValidity("请简单描述希望解决的问题。");
    scenario.reportValidity();
    return;
  }
  const summary = `关注方向：${interest.value}\n\n希望解决的问题：\n${scenario.value.trim()}\n\n希望进一步交流产品演示、技术方案与合作方式。`;
  document.querySelector("#inquiry-summary").value = summary;
  const url = new URL(
    "https://github.com/AITwinWise/aitwinwise.github.io/issues/new",
  );
  url.searchParams.set("title", `合作交流：${interest.value}`);
  url.searchParams.set("body", summary);
  document.querySelector("#github-inquiry").href = url.href;
  form.hidden = true;
  result.hidden = false;
  document.querySelector("#copy-status").textContent = "摘要已生成，尚未发送。";
  document.querySelector("#inquiry-summary").focus({ preventScroll: true });
});
document
  .querySelector("#scenario")
  .addEventListener("input", (event) => event.target.setCustomValidity(""));
document.querySelector("#edit-inquiry").addEventListener("click", () => {
  form.hidden = false;
  result.hidden = true;
  document.querySelector("#scenario").focus({ preventScroll: true });
});
document.querySelector("#copy-inquiry").addEventListener("click", async () => {
  const summary = document.querySelector("#inquiry-summary");
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(summary.value);
    status.textContent = "摘要已复制，可粘贴到你选择的交流渠道。";
  } catch {
    summary.focus();
    summary.select();
    status.textContent = "请复制已选中的摘要文字。";
  }
});
