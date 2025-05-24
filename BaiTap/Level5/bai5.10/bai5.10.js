const fs = require('fs');

function TemplateString(inputPath, params, outputPath) {
  // Bước 1: Đọc nội dung từ file template
  const template = fs.readFileSync(inputPath, 'utf8');

  // Bước 2: Dùng regex để thay {{key}} bằng params[key]
  const result = template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return key in params ? params[key] : match;
  });

  // Bước 3: Ghi nội dung đã thay ra file mới
  fs.writeFileSync(outputPath, result, 'utf8');
  console.log(`File mới đã được tạo: ${outputPath}`);
}

// Ví dụ sử dụng
const params = { name: 'Jonny' };
TemplateString('template.txt', params, 'output.txt');
