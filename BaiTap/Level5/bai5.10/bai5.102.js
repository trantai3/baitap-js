const fs = require("fs");

function TemplateString(inputPath, params, outputPath) {
  const template = fs.readFileSync(inputPath, "utf8");

  const result = template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return key in params ? params[key] : match;
  });

  fs.writeFileSync(outputPath, result, "utf8");
  console.log(`File mới đã được tạo: ${outputPath}`);
}

const params = {
  title: "Search of skill",
  pageTitle: "Home page",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consectetur",
};

TemplateString("bai5.10.html", params, "output.html");
